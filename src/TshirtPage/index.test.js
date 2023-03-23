import { screen } from "@testing-library/react";
import { CartProvider } from "core/contexts";
import { render } from "testUtils/render";

import TshirtPage from ".";

describe("TShirtPage", () => {
  test("should display a circular progress while loading data", async () => {
    render(<TshirtPage />, {
      path: `/tshirts/:tshirtId`,
      intialEntries: ["/tshirts/1"],
      wrapper: CartProvider,
    });

    expect(
      await screen.findByRole("heading", { level: 5 })
    ).toBeInTheDocument();
  });
});
