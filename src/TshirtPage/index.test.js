import render from "testUtils/render";
import { screen } from "@testing-library/react";

import TshirtPage from ".";
import { CartProvider } from "core/contexts";
import { createTshirt } from "testUtils/fixtures";

describe("TShirtPage", () => {
  test("should display a circular progress while loading data", async () => {
    const tshirt = createTshirt();
    render(<TshirtPage />, {
      path: `/tshirts/:tshirtId`,
      intialEntries: [`/tshirts/${tshirt.id}`],
      wrapper: CartProvider,
    });

    expect(
      await screen.findByRole("heading", { level: 5 })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: tshirt.name, level: 5 })
    ).toBeInTheDocument();
  });
});
