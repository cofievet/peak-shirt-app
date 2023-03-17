import {
  AppBar,
  Badge,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import TshirtCard from "../TshirtCard";
import React from "react";
import { useTshirts } from "core/hooks";
import StyleFilters from "StyleFilters";
import { useStyleFilters } from "core/contexts";

export default function HomePage() {
  const [selectedStyles] = useStyleFilters();

  const { isLoading, tshirts } = useTshirts({ styleIds: selectedStyles });

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Peak Shirt
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {isLoading ? (
        <CircularProgress />
      ) : (
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
      )}
    </>
  );
}
