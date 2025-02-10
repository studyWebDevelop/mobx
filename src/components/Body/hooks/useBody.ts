import { useState } from "react";

const useBody = () => {
  const [clickIdArray, setClickIdArray] = useState<Set<number>>(new Set());
  const [openModal, setOpenModal] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

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

  const handleOpenDeletePostModal = (id: number) => {
    setOpenModal(true);
    setPostId(id);
  };

  return {
    postId,
    openModal,
    setOpenModal,
    clickIdArray,
    handleClickPost,
    handleOpenDeletePostModal,
  };
};

export default useBody;
