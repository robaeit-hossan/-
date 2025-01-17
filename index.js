import express from 'express';
import helloRoutes from './routes/helloRoutes.js';
import {config} from './config/dotenvConfig.js';
const app = express();
// Use routes

app.use(helloRoutes);
app.use(express.json());

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
