import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(productRoutes);

export default app;

app.use(errorHandler);
