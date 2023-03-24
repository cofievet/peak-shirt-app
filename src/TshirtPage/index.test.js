import render from "testUtils/render";
import { screen, waitFor } from "@testing-library/react";

import TshirtPage from ".";
import { CartProvider } from "core/contexts";
import { createTshirt } from "testUtils/fixtures";

describe("TShirtPage", () => {
  test("should display tshirt card with the loaded data", async () => {
    const tshirt = createTshirt();
    render(<TshirtPage />, {
      path: `/tshirts/:tshirtId`,
      intialEntries: [`/tshirts/${tshirt.id}`],
      wrapper: CartProvider,
    });

    await waitFor(() =>
      screen.findByRole("heading", { name: tshirt.name, level: 5 })
    );

    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });
});
