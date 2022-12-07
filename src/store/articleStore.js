import { makeAutoObservable } from "mobx";

class ArticleStore {
  article = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export default ArticleStore;
