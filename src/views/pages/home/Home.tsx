import React from "react";
import DSlider from "views/components/custom/DSlider";
import FlashSell from "views/components/home/FlashSell";

const Home = () => {
  return (
    <main>
      <div className="py-20">
        <DSlider />
      </div>
      <div>
        <FlashSell />
      </div>
    </main>
  );
};

export default Home;
