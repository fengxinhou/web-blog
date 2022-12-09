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

  deleteBlog = async (id) => {
    await axios.delete(`${URL}/${id}`);
  };
}

export default BlogListStore;
