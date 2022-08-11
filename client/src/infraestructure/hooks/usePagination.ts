import { useState } from "react";

const usePagination = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return {
    rowsPerPage,
    setRowsPerPage,
  };
};

export default usePagination;
