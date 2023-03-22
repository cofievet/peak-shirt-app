import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Price } from "ds/atoms";
import { number, string, oneOf } from "prop-types";
import { Link } from "react-router-dom";

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
      <CardActionArea LinkComponent={Link} to={`/tshirts/${id}`}>
        <CardMedia
          alt={name}
          component="img"
          height="140"
          image={`/images/${imageUrl}`}
        />
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Grid container spacing={1} justifyContent={"space-between"}>
            <Grid item>
              <Chip
                style={{ fontWeight: "bold" }}
                label={`Taille : ${size}`}
                size="small"
              />
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
