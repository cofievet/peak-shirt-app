import { Divider, Paper } from "@mui/material";
import { node } from "prop-types";

/**
 *
 * @param {*} props
 * @param ReactComponent props.children
 * @param ReactComponent props.secondary Text secondaire, non obligatoire
 * @returns
 */

export default function BottomCallToActions({ children, secondary }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      square
    >
      {secondary}
      <Divider sx={{ margin: 2 }} />
      {children}
    </Paper>
  );
}

BottomCallToActions.propTypes = {
  children: node,
  secondary: node,
};
