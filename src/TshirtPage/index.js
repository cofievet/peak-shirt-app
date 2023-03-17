import TshirtCard from "TshirtCard";

export default function TshirtPage() {
  const tshirt = {
    id: 1,
    name: "tshirt",
    description: "test",
    imageUrl: "1.jpg",
    size: "S",
    price: 12.99,
  };

  return (
    <>
      <TshirtCard {...tshirt} />
    </>
  );
}
