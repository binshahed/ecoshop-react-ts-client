import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import FlashSell from "views/components/home/FlashSell";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <div>
        <DSlider />
      </div>
      <div>
        <FlashSell products={products} />
      </div>
    </main>
  );
};

export default Home;
