import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FilterProvider } from "core/contexts";
import { QueryClientProvider, QueryClient } from "react-query";

import HomePage from "../HomePage";
import theme from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CssBaseline />
          <HomePage />
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
