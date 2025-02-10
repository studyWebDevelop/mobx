import { useCallback } from "react";
import { postsStore } from "../../../store/postsStore";

const useCreatePost = (
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const onCreatePost = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const title = formData.get("title") as string;
      const content = formData.get("content") as string;
      const userName = formData.get("userName") as string;
      const password = formData.get("password") as string;

      if (!title || !content || !userName || !password) {
        alert("모든 요소를 채워주세요.");
        return;
      }

      const id = postsStore.posts.length + 1;

      const data = { id, title, content, userName, password };

      postsStore.addPost(data);

      setIsClick(false);
    },
    [setIsClick]
  );

  return {
    onCreatePost,
  };
};

export default useCreatePost;
