import { render, screen } from "@testing-library/react";
import Price from "./";

describe("Price", () => {
  let languageGetter;

  beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, "language", "get");
  });

  test("should display the price in Euro and in english version", () => {
    render(<Price value={12.68} />);

    expect(screen.getByText("€12.68")).toBeInTheDocument();
  });

  test("with a french language should display the price in Euro and in french version", () => {
    languageGetter.mockReturnValue("fr");
    render(<Price value={12.68} />);

    expect(screen.getByText("12,68 €")).toBeInTheDocument();
  });

  test("with a dollar currency language should display the price in dollar and in french version", () => {
    render(<Price value={12.68} currency="USD" />);

    expect(screen.getByText("12,68 $US")).toBeInTheDocument();
  });

  test("when navigator is null should display the price in Euro and in french version", () => {
    languageGetter.mockReturnValue(null);
    render(<Price value={12.68} />);

    expect(screen.getByText("12,68 €")).toBeInTheDocument();
  });
});
