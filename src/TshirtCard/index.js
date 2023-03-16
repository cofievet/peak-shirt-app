import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Price from "Price";
import { number, string, oneOf } from "prop-types";

export default function TshirtCard({
  id,
  name,
  description,
  imageUrl,
  size,
  price,
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          alt={name}
          component="img"
          height="140"
          image={`/images/${imageUrl}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item>
              <Chip label={`Taille : ${size}`} size="small" />
            </Grid>
            <Grid item>
              <Typography>
                <Price value={price} />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

TshirtCard.prototype = {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  size: oneOf(["S", "M", "L", "XL"]),
  price: number,
};
