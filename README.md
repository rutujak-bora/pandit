# 🕉️ Pandit Ji Services — Booking Website

**Live Website:** [poojapandits.com](https://poojapandits.com)

A professional Vedic puja booking platform for **Pandit Sandesh Tiwari**, serving the Delhi NCR region. Customers can book authentic Vedic ceremonies online, and the admin can manage all bookings via a secure dashboard.

---

## ✨ Features

### 🧑‍💼 Customer Side
- **Instant Booking Form** — Name, Phone, Service, Date, Time, Location
- **WhatsApp Integration** — Booking details auto-sent to Pandit Ji via WhatsApp
- **9 Service Pages** — Wedding Puja, Griha Pravesh, Navratri, Ganesh Puja, and more
- **Reviews System** — Customers can submit and view ratings
- **Fully Responsive** — Works on mobile, tablet, and desktop

### 🔐 Admin Dashboard (`/admin`)
- Secure login portal
- View all bookings in real-time
- One-click **Call** or **WhatsApp** to contact customers
- Auto-refresh capability

### 🛠️ Technical Highlights
- **Graceful MongoDB Fallback** — If DB is temporarily unavailable, bookings still succeed via WhatsApp
- **SEO Optimized** — Meta tags, sitemap, robots.txt, semantic HTML
- **Cloudflare CDN** — Fast global delivery with SSL

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Styling | Tailwind CSS + Shadcn UI |
| Database | MongoDB Atlas |
| Deployment | AWS EC2 + PM2 |
| CDN / SSL | Cloudflare |
| Icons | Lucide React |

---

## 📁 Project Structure

```
pandit_website/
├── app/
│   ├── page.js              # Main landing page
│   ├── admin/               # Admin dashboard & login
│   ├── services/[slug]/     # Dynamic service pages
│   └── api/[[...path]]/     # Unified API handler (booking, reviews)
├── components/ui/           # Shadcn UI components
├── public/
│   ├── services/            # Service images
│   ├── sitemap.xml
│   └── robots.txt
├── middleware.js            # Non-WWW redirect
├── deploy_aws.py            # AWS multi-server deployment script
├── deploy_config.py         # Server IPs & credentials config
└── .github/workflows/       # GitHub Actions CI/CD
```

---

## 🌐 Services Offered

| Service | Slug |
|---|---|
| Wedding Puja | `/services/wedding-puja` |
| Griha Pravesh | `/services/griha-pravesh` |
| New Office Opening | `/services/office-opening` |
| Navratri Puja | `/services/navratri-puja` |
| Ganesh Puja | `/services/ganesh-puja` |
| Satyanarayan Katha | `/services/satyanarayan-katha` |
| Naamkaran Sanskar | `/services/naamkaran-sanskar` |
| Vastu Shanti | `/services/vastu-shanti` |
| Pitru Paksha Shraddh | `/services/pitru-paksha-shraddh` |

---

## ⚙️ Local Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Setup

```bash
# Clone the repo
git clone https://github.com/rutujak-bora/pandit.git
cd pandit

# Install dependencies
npm install --legacy-peer-deps

# Create environment file
cp .env.example .env.local
# Edit .env.local with your MongoDB URL

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
DB_NAME=pandit_booking
```

> ⚠️ Never commit `.env.local` to git. Use AWS Parameter Store or GitHub Secrets for production.

---

## 🚀 Deployment

### AWS EC2 (Current Setup)

The project uses a **dual-server setup** on AWS:

| Role | IP | Description |
|---|---|---|
| Frontend | `65.2.127.142` | Serves the Next.js website |
| Backend | `13.127.89.76` | Handles API requests |

**Deploy to both servers with one command:**

```bash
python deploy_aws.py
```

This automatically:
1. Packages the project (excluding node_modules, .next)
2. Transfers via SCP to each EC2 instance
3. Installs dependencies & builds
4. Restarts the app using PM2

### GitHub Actions (CI/CD)

Automatic deployment on every push to `main`. Requires these **GitHub Secrets**:

| Secret | Value |
|---|---|
| `BACKEND_HOST` | `13.127.89.76` |
| `BACKEND_SSH_KEY` | Contents of `pandit_back.pem` |
| `FRONTEND_HOST` | `65.2.127.142` |
| `FRONTEND_SSH_KEY` | Contents of `pandi.pem` |
| `MONGO_URL` | Your MongoDB connection string |
| `DB_NAME` | `pandit_booking` |
| `REMOTE_USER` | `ubuntu` |

---

## 📞 Contact

**Pandit Sandesh Tiwari**
- 📱 Phone / WhatsApp: [+91 95807 58639](https://wa.me/919580758639)
- 🌐 Website: [poojapandits.com](https://poojapandits.com)
- 📍 Delhi NCR (Delhi, Gurgaon, Noida, Faridabad, Ghaziabad)

---

## 📄 License

This project is private and proprietary. All rights reserved © Pandit Ji Services.
