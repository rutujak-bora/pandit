# AWS Deployment Guide for Pandit Website

This project is configured for standalone Next.js deployment, which is highly optimized for production environments like AWS EC2, ECS, or App Runner.

## Option 1: AWS App Runner (Recommended - Easiest)

AWS App Runner is the easiest way to deploy containerized web applications.

1.  **Push to GitHub:** Ensure your code is in a GitHub repository.
2.  **AWS Console:** Go to App Runner > Create Service.
3.  **Source:** Repository type: GitHub. Connect your account and select the repo.
4.  **Deployment Settings:**
    *   **Deployment trigger:** Manual or Automatic.
5.  **Configure Build:**
    *   **Runtime:** Python/Node (Select **Docker** instead).
6.  **Configure Service:**
    *   **Port:** 3000
    *   **Environment Variables:** Add `MONGO_URL` and `DB_NAME`.
7.  **Review and Create:** Click "Create & Deploy".

## Option 2: AWS EC2 (Traditional)

If you want full control over the server.

1.  **Launch EC2 Instance:** Use Amazon Linux 2 or Ubuntu.
2.  **Install Docker:**
    ```bash
    sudo yum update -y
    sudo amazon-linux-extras install docker
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    ```
3.  **Clone Project:** `git clone <your-repo-url>`
4.  **Create .env file:**
    ```bash
    echo "MONGO_URL=your_mongodb_url" > .env
    echo "DB_NAME=pandit_booking" >> .env
    ```
5.  **Run with Docker Compose:**
    ```bash
    docker-compose up -d --build
    ```

## Option 3: AWS Elastic Beanstalk

1.  **Initialize EB:** `eb init` (requires EB CLI).
2.  **Create Environment:** `eb create` - choose Docker as the platform.
3.  **Set Env Vars:** Use `eb setenv MONGO_URL=...`

## Important Notes:
- **Environment Variables:** Never commit `.env.local` to git. Use AWS Parameter Store or App Runner environment variables for production secrets.
- **Port:** The application runs on port 3000 inside the container.
- **Standalone Mode:** The `Dockerfile` uses Next.js standalone mode which keeps the image size minimal by only including necessary files.
