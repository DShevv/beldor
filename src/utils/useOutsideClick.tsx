import { useEffect } from "react";

function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  onClick: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    }
    if (ref) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      if (ref) {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [ref, onClick]);
}

export default useOutsideClick;
