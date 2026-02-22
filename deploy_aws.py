import subprocess
import os
import sys

# Configuration
PEM_FILE = r"C:\Users\Admin\Downloads\pn-front.pem"
REMOTE_USER = "ubuntu"
REMOTE_HOST = "16.170.163.123"
PROJECT_DIR = "/home/ubuntu/pandit_website"
MONGO_URL = "mongodb+srv://sandesh9580:sandesh54321@pandit.zjt9iqc.mongodb.net/"
DB_NAME = "pandit_booking"

def run_ssh_cmd(cmd):
    ssh_cmd = [
        "ssh", "-o", "StrictHostKeyChecking=no",
        "-i", PEM_FILE,
        f"{REMOTE_USER}@{REMOTE_HOST}",
        cmd
    ]
    print(f"Executing: {cmd}")
    # Run and stream output to avoid massive buffer/encoding issues
    try:
        process = subprocess.Popen(ssh_cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, encoding='utf-8', errors='replace')
        for line in process.stdout:
            print(line, end='')
        process.wait()
        return process.returncode
    except Exception as e:
        print(f"Exception: {str(e)}")
        return 1

def deploy():
    print(f"--- Starting Deployment to {REMOTE_HOST} ---")

    # 1. Prepare Remote Environment
    print("Installing Node.js and dependencies on remote...")
    setup_script = f"""
    sudo apt-get update -y
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs unzip
    sudo npm install -g pm2
    mkdir -p {PROJECT_DIR}
    """
    run_ssh_cmd(setup_script)

    # 2. Package and Transfer Files
    print("Packaging and transferring files...")
    # Create a temporary zip (excluding node_modules, .next, etc.)
    zip_name = "project.zip"
    if os.path.exists(zip_name):
        os.remove(zip_name)
    
    # Using powershell to zip since we are on windows, excluding node_modules and .next
    subprocess.run([
        "powershell", 
        "$exclude = @('node_modules', '.next', '.git', 'project.zip'); Get-ChildItem -Path . -Exclude $exclude | Compress-Archive -DestinationPath project.zip -Force"
    ], shell=True)
    
    # SCP transfer
    scp_cmd = [
        "scp", "-o", "StrictHostKeyChecking=no",
        "-i", PEM_FILE,
        zip_name,
        f"{REMOTE_USER}@{REMOTE_HOST}:{PROJECT_DIR}/"
    ]
    subprocess.run(scp_cmd)
    os.remove(zip_name)

    # 3. Extract and Build
    print("Extracting and building on remote...")
    remote_build = f"""
    cd {PROJECT_DIR}
    unzip -o project.zip
    npm install --legacy-peer-deps
    
    # Create .env file
    echo "MONGO_URL={MONGO_URL}" > .env.local
    echo "DB_NAME={DB_NAME}" >> .env.local
    
    npm run build
    
    # Start with PM2
    pm2 delete pandit-web || true
    pm2 start "npm run start" --name pandit-web
    pm2 save
    
    # Allow port 3000
    sudo ufw allow 3000 || true
    """
    run_ssh_cmd(remote_build)

    print("\n--- Deployment Complete! ---")
    print(f"Website should be live at: http://{REMOTE_HOST}:3000")

if __name__ == "__main__":
    deploy()
