import useApi from "hooks/useApi";
import ProductService from "services/Product.service";
import DSlider from "views/components/custom/DSlider";
import FlashSell from "views/components/home/FlashSell";

const Home = () => {
  const { data: products } = useApi<IProduct[]>(ProductService.getAllProducts);

  return (
    <main>
      <div>
        <DSlider />
      </div>
      <div>{products && <FlashSell products={products} />}</div>
    </main>
  );
};

export default Home;
