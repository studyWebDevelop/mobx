import { postsStore } from "../../../store/postsStore";

const useDeletePost = () => {
  const onDeletePost = (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    postsStore.removePost(id, password);
    setOpenModal(false);
  };

  return {
    onDeletePost,
  };
};

export default useDeletePost;
