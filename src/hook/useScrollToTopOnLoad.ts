import { useEffect } from "react";

export const useScrollToTopOnLoad = (dependencies: unknown[] = []) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, dependencies);
};
