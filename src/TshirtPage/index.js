import { AddShoppingCart } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useTshirt } from "core/hooks";
import { useParams } from "react-router-dom";
import TshirtCard from "TshirtCard";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";

export default function TshirtPage() {
  let { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <>
      <TshirtCard {...tshirt} />
      <BottomCallToActions>
        <CtaButton startIcon={<AddShoppingCart />} fullWidth>
          Add to cart
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
