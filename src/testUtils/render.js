import { render as tlRender } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function render(element, options = {}) {
  const { path = "/", intialEntries = ["/"], ...restOptions } = options;

  return tlRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={intialEntries}>
        <Routes>
          <Route path={path} element={element} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
    restOptions
  );
}
