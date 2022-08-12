import { useState } from "react";

const useToast = () => {
  const [open, setOpenToast] = useState(false);

  const closeToast = () => setOpenToast(false);

  const openToast = () => setOpenToast(true);

  return {
    open,
    openToast,
    closeToast,
  };
};

export default useToast;