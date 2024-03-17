import { useState, useEffect, useCallback, useRef } from "react";
import TextInput from "@/components/base/TextInput";
import cn from "classnames";

const Searchbar = () => {
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef();

  const handleKeyPress = useCallback((e) => {
    console.log(e);
    if (e.key === "Enter" || e.keyCode === 13) {
      console.log(e.target.value);
    }
  }, []);

  useEffect(() => {
    inputRef.current.addEventListener("keypress", handleKeyPress);
  }, [handleKeyPress]);

  const cls = cn(
    { "w-96": isFocus },
    { "w-52": !isFocus },
    "transition-all will change auto duration-700"
  );

  return (
    <TextInput
      ref={inputRef}
      placeholder="Ürün Ara"
      name="search"
      size="sm"
      variant="transparent"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={cls}
    />
  );
};

export default Searchbar;
