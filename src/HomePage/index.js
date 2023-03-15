import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import logo from "../images/1.jpg";
import Image from "mui-image";

export default function HomePage() {
  return (
    <>
      <AppBar position="static">
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
      <Image src={logo} alt="Peak Shirt Logo" duration="0"></Image>
      <Typography>Construction en cours</Typography>
    </>
  );
}
