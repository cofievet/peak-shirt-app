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
import { Mail } from "@mui/icons-material";
import TshirtCard from "../TshirtCard";
import React from "react";
import { useTshirts } from "core/hooks";

export default function HomePage() {
  const { isLoading, tshirts } = useTshirts();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Peak Shirt!
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={1}>
          {tshirts.map((tshirt) => (
            <Grid item xs={6} key={tshirt.id}>
              <TshirtCard {...tshirt} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
