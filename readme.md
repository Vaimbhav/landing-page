# Quiet Summit Landing Page + Waitlist API

Production-ready pre-launch landing page and waitlist backend for Quiet Summit.

## Tech Stack

### Client
- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Server
- Node.js + Express
- MongoDB Atlas + Mongoose
- Helmet + CORS + Morgan
- express-rate-limit

## Project Structure

```bash
.
├── client
│   ├── public
│   │   ├── favicon.svg
│   │   └── og-image.svg
│   ├── src
│   │   ├── components
│   │   ├── data
│   │   ├── hooks
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── .env.example
└── readme.md
```

## Local Setup

### 1. Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2. Configure Environment Variables

Create environment files from examples:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Update values:
- `client/.env`
	- `VITE_API_BASE_URL` should point to your backend URL
- `server/.env`
	- `MONGODB_URI` is your MongoDB Atlas connection string
	- `CLIENT_ORIGIN` is your frontend URL

### 3. Run Locally

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm run dev
```

Frontend: `http://localhost:5173`

Backend health: `http://localhost:5000/api/health`

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user with read/write access.
4. Add your IP to Network Access (`0.0.0.0/0` for testing only).
5. Copy the connection string and replace placeholders.
6. Paste it into `server/.env` as `MONGODB_URI`.

## API Endpoint

### POST /api/waitlist

Request body:

```json
{
	"fullName": "Your Name",
	"whatsappNumber": "+91XXXXXXXXXX",
	"email": "you@example.com",
	"role": "MEMBER"
}
```

Responses:
- `201`: added successfully
- `409`: duplicate email
- `400`: invalid email
- `429`: rate limit exceeded

## Deployment

### Deploy Client to Vercel

1. Push repo to GitHub.
2. Import project in Vercel.
3. Set root directory to `client`.
4. Add environment variable:
	 - `VITE_API_BASE_URL=https://<your-render-service>/api`
5. Deploy.

### Deploy Server to Render

1. Create a new Web Service in Render.
2. Connect your GitHub repo.
3. Set root directory to `server`.
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables:
	 - `PORT=5000`
	 - `MONGODB_URI=<atlas-uri>`
	 - `CLIENT_ORIGIN=<your-vercel-url>`
	 - `NODE_ENV=production`
7. Deploy.

## Security Notes

- Backend validates and normalizes all emails.
- Duplicate emails are blocked via DB uniqueness + API checks.
- API is protected with security headers and rate limiting.
- Environment variables are used for all secrets and origins.
