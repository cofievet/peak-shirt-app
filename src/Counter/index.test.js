import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./";

const substractButtonName = "Substract";
const addButtonName = "Add";

/**
 * button Test Helper pour récupérer un bouton en fonction de son nom
 *
 * @param {*} name
 * @returns
 */
const button = (name) => screen.getByRole("button", { name });

/**
 * heading Test Helper pour récupérer un heading par valeur et niveau
 * @param {*} value
 * @returns
 */
const heading = (value, level) =>
  screen.getByRole("heading", { name: value, level });

describe("Counter", () => {
  it("displays zero as default value", () => {
    render(<Counter />);
    expect(heading(0, 3)).toBeInTheDocument();
  });

  it("displays add button", () => {
    render(<Counter />);
    expect(button(addButtonName)).toBeInTheDocument();
  });

  it("displays substract button", () => {
    render(<Counter />);
    expect(button(substractButtonName)).toBeInTheDocument();
  });

  describe("after clicking on Add button", () => {
    it("displays 1", () => {
      render(<Counter />);

      userEvent.click(button(addButtonName));
      expect(heading(1, 3)).toBeInTheDocument();
    });
  });

  describe("after clicking on Substract button", () => {
    it("displays -1", () => {
      render(<Counter />);

      userEvent.click(button(substractButtonName));
      expect(heading(-1, 3)).toBeInTheDocument();
    });
  });
});
