import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";
import AddToCart from "./LeftPanel/AddToCart";
import AddToWishlist from "./LeftPanel/AddToWishlist";
import Amount from "./LeftPanel/Amount";
import Ariane from "./LeftPanel/Ariane";
import Color from "./LeftPanel/Color";
import Review from "./LeftPanel/Review";
import Social from "./LeftPanel/Social";
import Title from "./LeftPanel/Title";

const LeftPanel = () => {
  return (
    <div className="flex w-1/2 flex-col justify-between p-12">
      <div className="flex flex-col gap-2">
        <Button variant="outline" size="icon" className="border-transparent">
          <MoveLeft className="size-6" />
        </Button>
        <Ariane />
      </div>
      <div className="flex flex-col gap-4">
        <Title />
        <div className="flex items-center gap-32">
          <Amount />
          <Review />
        </div>
        <p>
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also, there’s a tilt and
          height-adjusting mechanism that’s built to outlast years of ups and
          downs.
        </p>
        <Color />
      </div>
      <div className="flex flex-col gap-8">
        <AddToCart />
        <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <AddToWishlist />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
