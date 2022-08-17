import { useState } from "react";

export enum alertColorEnum {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
}

const useToast = () => {
  const [open, setOpenToast] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(alertColorEnum.SUCCESS);

  const closeToast = () => setOpenToast(false);

  const openToast = (msg: string, type = alertColorEnum.SUCCESS) => {
    setOpenToast(true);
    setMessage(msg);
    setType(type);
  };

  return {
    open,
    openToast,
    closeToast,
    message,
    type,
  };
};

export default useToast;
