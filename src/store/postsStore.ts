import { observable, toJS } from "mobx";
import type { PostType } from "../types/post.interface";

const postsStore = observable({
  posts: JSON.parse(localStorage.getItem("postList") as string) || [],

  saveToLocalStorage() {
    localStorage.setItem("postList", JSON.stringify(this.posts));
  },

  addPost(post: PostType) {
    this.posts = [...this.posts, post];
    this.saveToLocalStorage();
  },

  removePost(id: number, password: string) {
    const 게시글length = this.posts.length;

    this.posts = this.posts.filter(
      (post: PostType) => !(post.id === id && post.password === password)
    );

    if (게시글length > this.posts.length) {
      alert("게시글이 삭제되었어요");
    } else {
      alert("게시글 삭제에 실패했어요");
    }

    this.saveToLocalStorage();
  },

  get getPosts() {
    return toJS(this.posts);
  },
});

export { postsStore };
