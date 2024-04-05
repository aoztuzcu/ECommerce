// data formatting
// price formatting

const currencySymbol = "$";

const formatPrice = (price) => {
  return currencySymbol + price.toFixed(2);
};

const calcDiscountedPrice = (price, discountPercentage, type = "str") => {
  const discountedPrice = price - (price * discountPercentage) / 100;
  if (type === "str") {
    return formatPrice(discountedPrice);
  }
  return parseFloat(discountedPrice.toFixed(2));
};

// slugify to unSlugify
const unSlugify = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const slugify = (text) => {
  return text
    .toLowerCase() // Tüm harfleri küçük harfe dönüştürür
    .replace(/\s+/g, "-") // Boşlukları tireye dönüştürür
    .replace(/[^\w\-]+/g, "") // Alfasayısal olmayan karakterleri kaldırır
    .replace(/\-\-+/g, "-") // Ardışık tireleri tek bir tireye dönüştürür
    .replace(/^-+/, "") // Başlangıçtaki tüm tireleri kaldırır
    .replace(/-+$/, ""); // Sonundaki tüm tireleri kaldırır
};

//Debounce
// tekrarlanan bir fonksiyonu delay kadar geciktiriyor.
const debounce = (func, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

//throttle
//fonksiyonu limit süresi boyunca o aralıkta çağırıyor.
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export {
  formatPrice,
  calcDiscountedPrice,
  unSlugify,
  slugify,
  debounce,
  throttle,
};
