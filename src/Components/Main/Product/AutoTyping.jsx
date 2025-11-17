import { useState, useEffect } from "react";

const AutoType = () => {
  const texts = ["I'm React Developer", "I'm Frontend Developer", "I Love Coding"];
  const [ti, setTi] = useState(0);   // text index
  const [i, setI] = useState(0);     // letter index
  const [isT, setIsT] = useState(true); // typing or deleting
  useEffect(() => {
    const t = texts[ti];
    const speed = isT ? 120 : 80;

    const timer = setTimeout(() => {
      if (isT) {
        if (i < t.length) setI(i + 1);
        else setIsT(false);
      } else {
        if (i > 0) setI(i - 1);
        else {
          setTi((ti + 1) % texts.length);
          setIsT(true);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [i, isT, ti]);
  return (
    <h1 className="text-3xl font-semibold text-amber-500 p-9">
      {texts[ti].slice(0, i)}|
    </h1>
  );
};

export default AutoType;
