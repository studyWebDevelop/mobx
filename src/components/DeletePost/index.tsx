import Modal from "../Modal";
import st from "./DeletePost.module.scss";
import useDeletePost from "./hooks/useDeletePost";

interface DeletePostProps {
  id: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeletePost = ({ id, setOpenModal }: DeletePostProps) => {
  const { onDeletePost } = useDeletePost();

  return (
    <Modal>
      <div className={st.container}>
        <h1>게시글을 삭제하려면 비밀번호를 입력해주세요.</h1>
        <form
          className={st.inputWrapper}
          onSubmit={(e) => onDeletePost(e, id, setOpenModal)}
        >
          <input
            className={st.input}
            name="password"
            type="password"
            placeholder="비밀 번호"
          />
          <button type="submit">삭제</button>
        </form>
      </div>
    </Modal>
  );
};

export default DeletePost;
