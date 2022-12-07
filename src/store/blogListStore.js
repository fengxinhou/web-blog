import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/blogList";
class BlogListStore {
  blogList = [];
  constructor() {
    makeAutoObservable(this);
  }
  getBlogList = async () => {
    const res = await axios.get(URL);
    runInAction(() => {
      this.blogList = res.data;
    });
    return this.blogList;
  };
}

export default BlogListStore;
