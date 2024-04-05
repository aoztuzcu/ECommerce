import { useEffect, useState } from "react";
import { fetchProductById } from "@/utils/request";
import { useParams } from "react-router-dom";
import ProductImgSwiper from "@/components/feature/ProductImgSwiper";
import ProductImgSlider from "@/components/feature/ProductImgSlider";

const ProductDetail = () => {
  const { id, title } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res));
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div className="container">
      <div className="flex gap-6 items-center">
        <div className="w-96 select-none">
          {/* <ProductImgSwiper images={product.images} /> */}
          <ProductImgSlider images={product.images} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
