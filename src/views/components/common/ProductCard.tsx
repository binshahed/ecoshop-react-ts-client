import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="col-md-3">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>Product Title</h4>
        <p>Product Price</p>
      </div>
    </div>
  );
};

export default ProductCard;
