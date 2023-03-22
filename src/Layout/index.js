import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCart } from "core/contexts";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [{ isCartEmpty, cartQuatity }] = useCart();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="h1">
              Peak Shirt
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show cart quantity"
              color="inherit"
              LinkComponent={Link}
              to="/cart"
            >
              <Badge badgeContent={cartQuatity} color="primary">
                {isCartEmpty ? <ShoppingCartOutlined /> : <ShoppingCart />}
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
