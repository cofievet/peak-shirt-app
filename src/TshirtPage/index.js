import { AddShoppingCart } from "@mui/icons-material";
import { CircularProgress, Paper } from "@mui/material";
import { useTshirt } from "core/hooks";
import { useParams } from "react-router-dom";
import TshirtCard from "TshirtCard";
import { CtaButton } from "ds/atoms";

export default function TshirtPage() {
  let { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <>
      <TshirtCard {...tshirt} />
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
        square
      >
        <CtaButton startIcon={<AddShoppingCart />} fullWidth>
          Add to cart
        </CtaButton>
      </Paper>
    </>
  );
}
