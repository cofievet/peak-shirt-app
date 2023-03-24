import { screen } from "@testing-library/react";
import { createTshirt } from "testUtils/fixtures";
import render from "testUtils/render";
import TshirtCard from "./";

describe("TshirtCard", () => {
  test("without any prop, it does not render the title", () => {
    render(<TshirtCard />);
    expect(screen.queryByRole("heading", { level: 5 })).not.toBeInTheDocument();
  });

  test("with correct props, it doest render the tshirt card", () => {
    const tshirt = createTshirt();

    render(<TshirtCard {...tshirt} />);

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
