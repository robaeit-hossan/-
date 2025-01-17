import dotenv from "dotenv";
dotenv.config();

export const config = {
  secretKey: process.env.SECRET_KEY || "your-secret-key",
  port: process.env.PORT || 3000,
};
