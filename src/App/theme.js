import { createTheme } from "@mui/material/styles";

import { grey, common } from "@mui/material/colors";

/**
 * PeakShirt Theme
 *
 * Features:
 * - AppBar is sticky by default
 */
export default createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backgroundColor: common.white,
          color: grey[900],
        },
      },
    },
  },
});
// TODO A tester
