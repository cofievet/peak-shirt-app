import { Chip, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import { useStyleFilters } from "core/contexts";
import useStyles from "core/hooks/useStyles";
import React from "react";

export default function StyleFilters() {
  const { isLoading, styles } = useStyles();

  const [selectedStyles, { selectFilter }] = useStyleFilters();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      component="ul"
      sx={{ margin: 0, padding: 2 }}
    >
      {styles.map(({ id, name }) => (
        <Chip
          key={id}
          label={name}
          component="li"
          variant="outlined"
          onClick={selectFilter(id)}
          color={selectedStyles.has(id) ? "primary" : "default"}
        />
      ))}
    </Stack>
  );
}
