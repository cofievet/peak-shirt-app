import { CircularProgress, Grid } from "@mui/material";
import TshirtCard from "../TshirtCard";
import React from "react";
import { useTshirts } from "core/hooks";
import StyleFilters from "StyleFilters";
import { useStyleFilters } from "core/contexts";

export default function HomePage() {
  const [selectedStyles] = useStyleFilters();

  const { isLoading, tshirts } = useTshirts({ styleIds: selectedStyles });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <StyleFilters />
      <Grid container spacing={1}>
        {tshirts.map((tshirt) => (
          <Grid item xs={6} style={{ display: "flex" }} key={tshirt.id}>
            <TshirtCard {...tshirt} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
