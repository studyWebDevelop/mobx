/* eslint-disable react-refresh/only-export-components */
import clsx from "clsx";
import Modal from "../Modal";
import st from "./CreatePost.module.scss";
import { observer } from "mobx-react";
import useCreatePost from "./hooks/useCreatePost";

export type CreatePostProps = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePost = ({ setIsClick }: CreatePostProps) => {
  const { onCreatePost } = useCreatePost(setIsClick);

  return (
    <Modal>
      <div className={st.container}>
        <form className={st.formWrapper} onSubmit={onCreatePost}>
          <input
            name="title"
            className={st.inputPadding}
            type="text"
            placeholder="제목"
          />
          <textarea
            className={clsx(st.inputPadding, st.textarea)}
            name="content"
            placeholder="내용"
            rows={10}
          />
          <div className={st.userWrapper}>
            <input
              className={st.inputPadding}
              name="userName"
              type="text"
              placeholder="유저 이름"
            />
            <input
              className={st.inputPadding}
              name="password"
              type="password"
              placeholder="비밀 번호"
            />
          </div>
          <button className={st.inputPadding} type="submit">
            작성
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default observer(CreatePost);
