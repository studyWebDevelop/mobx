/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react";
import { postsStore } from "../../store/postsStore";
import st from "./Body.module.scss";
import useBody from "./hooks/useBody";
import type { PostType } from "../../types/post.interface";

const Body = () => {
  const { posts } = postsStore;
  const { handleClickPost, clickIdArray } = useBody();

  return (
    <div className={st.container}>
      <div className={st.wrapper}>
        {posts.map((post: PostType) => (
          <div
            className={st.postWrapper}
            key={post.id}
            onClick={() => handleClickPost(post.id)}
          >
            <div className={st.titleWrapper}>
              <span>{post.id}</span>
              <h1>{post.title}</h1>
            </div>

            {clickIdArray.has(post.id) && (
              <div className={st.contentWrapper}>{post.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Body);
