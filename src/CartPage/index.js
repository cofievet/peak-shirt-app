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

const TotalPrice = ({ price }) => {
  return (
    <Typography>
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
  const cart = [
    { id: 1, price: 123.6, name: "Tshirt 1", imageUrl: "1.jpg", quantity: 2 },
    { id: 2, price: 85.4, name: "Tshirt 2", imageUrl: "2.jpg", quantity: 1 },
    { id: 3, price: 85.4, name: "Tshirt 3", imageUrl: "3.jpg", quantity: 2 },
    { id: 4, price: 85.4, name: "Tshirt 4", imageUrl: "4.jpg", quantity: 5 },
  ];

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
        <CtaButton startIcon={<ShoppingCartCheckout />} fullWidth>
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
