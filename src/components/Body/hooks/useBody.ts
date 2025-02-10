import { useState } from "react";

const useBody = () => {
  const [clickIdArray, setClickIdArray] = useState<Set<number>>(new Set());

  const handleClickPost = (id: number) => {
    setClickIdArray((prevIds) => {
      const idArray = new Set(prevIds);

      if (idArray.has(id)) {
        idArray.delete(id);
      } else {
        idArray.add(id);
      }

      return idArray;
    });
  };

  return {
    clickIdArray,
    handleClickPost,
  };
};

export default useBody;
