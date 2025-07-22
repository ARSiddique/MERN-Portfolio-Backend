import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contact-route.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// Global middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));