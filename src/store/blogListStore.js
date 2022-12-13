import { makeAutoObservable, runInAction } from "mobx";
import { http } from "../utils";

const URL = "/blog";
class BlogListStore {
  blogList = [];
  totalNumber = 0;
  constructor() {
    makeAutoObservable(this);
  }
  getBlogList = async () => {
    const res = await http.get(URL);
    runInAction(() => {
      this.blogList = res.result;
      this.totalNumber = res.count;
    });
    return { blogList: this.blogList, totalNumber: this.totalNumber };
  };
}

export default BlogListStore;
