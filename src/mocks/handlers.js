import { rest } from "msw";
import { createTshirt } from "testUtils/fixtures";

export const handlers = [
  rest.get("http://localhost/tshirts/:id", (req, res, ctx) => {
    const { id } = req.params;
    console.log(id);

    return res(ctx.status(200), ctx.json(createTshirt({ id })));
  }),
];
