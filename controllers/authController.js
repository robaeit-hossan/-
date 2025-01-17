import jwt from "jsonwebtoken";
import { config } from "../config/dotenvConfig.js";

export const generateToken = (req, res) => {
  const payload = {
    username: "dharubhai",
    role: "developer",
  };

  try {
    // Create a JWT token
    const token = jwt.sign(payload, config.secretKey, { expiresIn: "1h" });

    // Respond with the token
    res.status(200).json({
      success: true,
      message: "Token generated successfully!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate token.",
      error: error.message,
    });
  }
};
