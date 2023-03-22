import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import { number } from "prop-types";

const TotalPrice = ({ price }) => {
  return (
    <Typography>
      Total price: <strong>{price}€</strong>
    </Typography>
  );
};

TotalPrice.propTypes = {
  price: number,
};

export default function CartPage() {
  return (
    <>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src=""></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src=""></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src=""></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src=""></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
      </List>
      <BottomCallToActions secondary={<TotalPrice price={269.68} />}>
        <CtaButton startIcon={<ShoppingCartCheckout />} fullWidth>
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
