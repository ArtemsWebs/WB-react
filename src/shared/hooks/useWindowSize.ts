import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): { isMobile: boolean; width: number } => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Инициализация при монтировании
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Возвращаем false по умолчанию для SSR
  if (typeof window === "undefined") {
    return { isMobile: false, width: 0 };
  }

  return { isMobile: windowSize.width < 900, width: windowSize.width };
};
