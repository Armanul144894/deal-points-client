import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` ${title} - deal-points`;
  }, [title]);
};
export default useTitle;
