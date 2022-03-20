import React from "react";
import ProductCard from "../common/ProductCard";

const FlashSell = ({ products }: { products: any[] }) => {
  return (
    <div className="d-flex row ">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default FlashSell;
