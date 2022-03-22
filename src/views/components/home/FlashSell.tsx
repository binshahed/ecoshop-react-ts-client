import React from "react";
import ProductCard from "../common/ProductCard";

const FlashSell = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="d-flex row ">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default FlashSell;
