import React from "react";
import ProductCard from "../common/ProductCard";

const FlashSell = () => {
  return (
    <div className="flex border-solid border-2 border-slate-400">
      {[1, 2, 3, 4, 5].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default FlashSell;
