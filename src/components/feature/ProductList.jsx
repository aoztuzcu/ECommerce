import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsAsync,
  fetchProductsByCategoryAsync,
} from "@/store/productsSlice";
import ProductCard from "@/components/block/ProductCard";

const ProductList = ({ limit, skip, title, slug }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductsByCategoryAsync(slug));
    } else {
      dispatch(
        fetchProductsAsync({
          limit,
          skip,
        })
      );
    }
  }, [dispatch, limit, skip, slug]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products &&
          products.map((item) => (
            <ProductCard key={item.id} {...item}></ProductCard>
          ))}
      </div>
    </>
  );
};

ProductList.defaultProps = {
  limit: 0,
  skip: 0,
  title: "En çok satanlar",
};

ProductList.propTypes = {
  limit: PropTypes.number,
  skip: PropTypes.number,
  title: PropTypes.string,
};

export default ProductList;
