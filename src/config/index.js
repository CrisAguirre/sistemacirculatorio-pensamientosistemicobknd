const dotenv = require('dotenv');
dotenv.config();

const frontendUrl = (process.env.FRONTEND_URL || '').replace(/\/+$/, '') || 'http://localhost:5173';

const corsOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

if (frontendUrl) {
  corsOrigins.push(frontendUrl);
}

if (process.env.CORS_ORIGIN) {
  process.env.CORS_ORIGIN.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .forEach((origin) => corsOrigins.push(origin));
}

module.exports = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI,
  frontendUrl,
  corsOrigins: [...new Set(corsOrigins)],
};
