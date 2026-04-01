// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// module.exports = cloudinary;


require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// Validate environment variables
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  throw new Error("❌ Cloudinary environment variables are missing");
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

// Optional: test config (can remove in production)
cloudinary.api.ping((error, result) => {
  if (error) {
    console.error("❌ Cloudinary connection failed:", error);
  } else {
    console.log("✅ Cloudinary connected successfully");
  }
});

module.exports = cloudinary;
