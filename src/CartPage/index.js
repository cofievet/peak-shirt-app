import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import { Price } from "ds/atoms";
import { number } from "prop-types";
import { useCart } from "core/contexts";

const TotalPrice = ({ price }) => {
  return (
    <Typography sx={{ marginTop: 2 }}>
      Total price:
      <strong>
        {" "}
        <Price value={price} />
      </strong>
    </Typography>
  );
};

TotalPrice.propTypes = {
  price: number,
};

export default function CartPage() {
  const [cart, { purchaseCart }] = useCart();

  const cartEmpty = cart.length === 0;

  if (cartEmpty) {
    return (
      <Typography textAlign={"center"} variant="h4">
        Go Shopping !
      </Typography>
    );
  }

  return (
    <>
      <List>
        {cart.map(({ id, price, name, imageUrl, quantity }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={`/images/${imageUrl}`}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Grid container>
                    <Grid item>
                      <Typography>{name}</Typography>
                    </Grid>
                    {quantity > 1 && (
                      <Grid item sx={{ marginLeft: 1 }}>
                        <Typography variant="caption">(x{quantity})</Typography>
                      </Grid>
                    )}
                  </Grid>
                </>
              }
              secondary={<Price value={price} />}
            />
          </ListItem>
        ))}
      </List>
      <BottomCallToActions secondary={<TotalPrice price={269.68} />}>
        <CtaButton
          startIcon={<ShoppingCartCheckout />}
          fullWidth
          onClick={purchaseCart}
        >
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
