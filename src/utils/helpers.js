// data formatting
// price formatting

const currencySymbol = "$";

const formatPrice = (price) => {
  return currencySymbol + price.toFixed(2);
};

const calcDiscountedPrice = (price, discountPercentage) => {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return formatPrice(discountedPrice);
};

// slugify to unSlugify
const unSlugify = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export { formatPrice, calcDiscountedPrice, unSlugify };
