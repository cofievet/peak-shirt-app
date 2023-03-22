import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CartProvider, FilterProvider } from "core/contexts";
import ErrorPage from "ErrorPage";
import Layout from "Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TshirtPage from "TshirtPage";
import CartPage from "CartPage";

import HomePage from "../HomePage";
import theme from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tshirts/:tshirtId",
        element: <TshirtPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CartProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </CartProvider>
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
