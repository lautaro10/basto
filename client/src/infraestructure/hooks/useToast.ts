import { useState } from "react";

const useToast = () => {
  const [open, setOpenToast] = useState(false);
  const [message, setMessage] = useState("");

  const closeToast = () => setOpenToast(false);

  const openToast = (msg: string) => {
    setOpenToast(true);
    setMessage(msg);
  };

  return {
    open,
    openToast,
    closeToast,
    message,
  };
};

export default useToast;
