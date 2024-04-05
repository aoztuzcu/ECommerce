import { useState, useEffect } from "react";
import { throttle } from "@/utils/helpers";
import ProductList from "@/components/feature/ProductList";
import Button from "@/components/base/Button";

const Home = () => {
  const [skip, setSkip] = useState(0);

  const handleLoadMore = () => {
    setSkip((prev) => prev + 20);
  };

  const handleGoToStart = () => {
    setSkip(0);
  };

  const handleLoadPrev = () => {
    setSkip((prev) => prev - 20);
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleGoToTop();
  }, [skip]);

  const handleScroll = (e) => {
    console.log(e);
  };

  const throttleScroll = throttle(handleScroll, 500);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);

    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  return (
    <div className="container">
      <p className="text-right">{skip / 20 + 1}. Sayfa Görüntüleniyor </p>

      <ProductList limit={20} skip={skip} />
      <div className="flex items-start justify-center gap-4 my-5">
        {skip > 0 && (
          <>
            <Button onClick={handleGoToStart} disabled={skip == 0} size="sm">
              Başa Dön
            </Button>

            <Button onClick={handleLoadPrev} disabled={skip == 0} size="sm">
              Önceki
            </Button>
          </>
        )}

        <Button onClick={handleLoadMore} disabled={skip >= 80} size="sm">
          Daha Fazla
        </Button>
      </div>
      {/* <div style={{ height: "1000vh", backgroundColor: "#eee" }}></div> */}
    </div>
  );
};
export default Home;
