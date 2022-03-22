import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
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
