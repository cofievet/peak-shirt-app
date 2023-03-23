import { render } from "@testing-library/react";
import CtaButton from "./";

describe("CtaButton", () => {
  it("should pass children on MUI Button", () => {
    const { container } = render(<CtaButton>Click Me!</CtaButton>);
    expect(container).toMatchSnapshot();
  });
});
