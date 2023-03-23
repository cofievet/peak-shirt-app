import { screen } from "@testing-library/react";
import renderWithRouter from "testUtils/renderWithoutRouter";
import TshirtCard from "./";

const tshirt = {
  id: 1,
  name: "tshirt",
  description: "tshirt description",
  imageUrl: "1/jpg",
  size: "S",
  price: 12.99,
};

describe("TshirtCard", () => {
  test("without any prop, it does not render the title", () => {
    renderWithRouter(<TshirtCard />);
    expect(screen.queryByRole("heading", { level: 5 })).not.toBeInTheDocument();
  });

  test("with correct props, it doest render the tshirt card", () => {
    renderWithRouter(<TshirtCard {...tshirt} />);

    expect(
      screen.getByRole("heading", { name: tshirt.name, level: 5 })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: `€${tshirt.price}`, level: 6 })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: tshirt.name })).toBeInTheDocument();

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/tshirts/${tshirt.id}`);
  });
});
