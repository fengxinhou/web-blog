import { makeAutoObservable, runInAction } from "mobx";
import { http } from "../utils";

class ArticleStore {
  article = {};
  constructor() {
    makeAutoObservable(this);
  }
  getArticleDetail = async (id) => {
    const res = await http.get(`/blog/${id}`);
    runInAction(() => {
      this.article = res;
    });
    return this.article;
  };
}

export default ArticleStore;
