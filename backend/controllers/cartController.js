let cart = [];

export const addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  cart.push({ productId, quantity });

  res.status(201).json({
    message: "Item added to cart",
    cart
  });
};
