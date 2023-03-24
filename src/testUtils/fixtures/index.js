const defaultTshirt = {
  id: 1,
  name: "tshirt",
  description: "tshirt description",
  imageUrl: "1.jpg",
  size: "S",
  price: 12.99,
};

export const createTshirt = (tshirt = defaultTshirt) => ({
  ...defaultTshirt,
  ...tshirt,
});
