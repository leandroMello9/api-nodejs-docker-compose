import express from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes';


const app = express();
dotenv.config();

app.use(express.json());
app.use(mainRoutes);
export default app;