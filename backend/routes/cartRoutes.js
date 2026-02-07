import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { validateCart } from "../middleware/validateCart.js";

const router = express.Router();

router.post("/cart", validateCart, addToCart);

export default router;
