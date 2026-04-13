# Authentication & Testing Project

A robust full-stack web application designed to demonstrate backend authentication, file uploads, and a mock payment system. The app uses a Node.js/Express backend with MongoDB, and features a vanilla HTML/CSS/JS frontend dashboard.

## Features

- **JWT-based User Authentication:** Secure registration and login functionalities using JSON Web Tokens and bcryptjs.
- **Product Image Uploads:** Integrated with Multer and Cloudinary to securely upload and serve product images.
- **Mock Payment API:** Simulates processing payments via a mock endpoint.
- **Data Validation:** Utilizes `express-validator` to ensure all incoming data is structurally sound and secure.
- **Frontend Dashboard:** A responsive user interface built using HTML, CSS, and Vanilla JavaScript to demonstrate the backend functionality effortlessly.

## Technology Stack

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcryptjs (Password Hashing)
- Cloudinary & Multer (Image processing and storage)
- express-validator

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed securely
- A running [MongoDB](https://www.mongodb.com/try/download/community) server or an Atlas URI
- A [Cloudinary](https://cloudinary.com/) account for image uploads

### Steps to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <YOUR-REPOSITORY-URL>
   cd "Authentication & Testing"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth_test_db
   JWT_SECRET=your_super_secret_jwt_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will start, and the backend server will listen on `http://localhost:5000` (or your defined `PORT`).

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login to receive a JWT

### Uploads
- `POST /api/upload` - Upload an image file (Requires JWT Header `Authorization: Bearer <token>`)

### Payments
- `POST /api/payment/process` - Process a generic simulated payment (Requires JWT Header `Authorization: Bearer <token>`)

