import { Chip, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import useStyles from "core/hooks/useStyles";
import React from "react";

export default function StyleFilters() {
  const { isLoading, styles } = useStyles();
  const [selectedStyles, selectStyles] = React.useState([1, 3]);

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
          onClick={() => {
            console.log(`Click: ${id}`);
          }}
          color={selectedStyles.includes(id) ? "primary" : "default"}
        />
      ))}
    </Stack>
  );
}
