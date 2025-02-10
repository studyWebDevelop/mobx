import { observer } from "mobx-react";
import { postsStore } from "../../store/postsStore";
import st from "./Body.module.scss";
import useBody from "./hooks/useBody";
import type { PostType } from "../../types/post.interface";
import ModalPortal from "../../common/helpers/ModalPortal";
import DeletePost from "../DeletePost";

const Body = () => {
  const { posts } = postsStore;
  const {
    postId,
    openModal,
    setOpenModal,
    handleClickPost,
    clickIdArray,
    handleOpenDeletePostModal,
  } = useBody();

  return (
    <div className={st.container}>
      <div className={st.wrapper}>
        {posts.map((post: PostType) => (
          <div
            key={post.id}
            className={st.postWrapper}
            onClick={() => handleClickPost(post.id)}
          >
            <div className={st.titleWrapper}>
              <div className={st.textWrapper}>
                <span>{post.id}</span>
                <h1>{post.title}</h1>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation(); // onClick이 부모 요소로 전달되지 않도록 막음
                  handleOpenDeletePostModal(post.id);
                }}
              >
                X
              </div>
            </div>

            {clickIdArray.has(post.id) && (
              <div className={st.contentWrapper}>{post.content}</div>
            )}
          </div>
        ))}
      </div>

      {openModal && (
        <ModalPortal>
          <DeletePost id={Number(postId)} setOpenModal={setOpenModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export default observer(Body);
