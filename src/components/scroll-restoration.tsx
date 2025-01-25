import { useLayoutEffect, useRef } from "react";

export const ScrollRestoration = () => {
  const abortController = useRef(new AbortController());

  useLayoutEffect(() => {
    const { signal } = abortController.current;

    window.addEventListener(
      "beforeunload",
      () => {
        localStorage.setItem("scroll", window.scrollY.toString());
      },
      { signal }
    );

    const scroll = localStorage.getItem("scroll");

    document.body.removeAttribute("hidden");
    if (scroll) {
      window.scrollTo(0, parseInt(scroll, 10) - 1);
    }

    return () => {
      abortController.current.abort();
    };
  }, []);

  return null;
};
