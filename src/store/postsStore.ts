import { observable, toJS } from "mobx";
import type { PostType } from "../types/post.interface";

const postsStore = observable({
  posts: localStorage.getItem("postList")
    ? [JSON.parse(localStorage.getItem("postList") as string)]
    : [],

  addPost(post: PostType) {
    this.posts = [...this.posts, post];
  },

  removePost(password: string) {
    this.posts = this.posts.filter(
      (post: PostType) => post.password !== password
    );
  },

  get getPosts() {
    return toJS(this.posts);
  },
});

export { postsStore };
