import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  onClickOutside: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
