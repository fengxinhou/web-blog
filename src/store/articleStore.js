import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/article";
class ArticleStore {
  article = {};
  constructor() {
    makeAutoObservable(this);
  }
  getArticleDetail = async () => {
    const res = await axios.get(URL);
    runInAction(() => {
      this.article = res.data;
    });
    return this.article;
  };
}

export default ArticleStore;
