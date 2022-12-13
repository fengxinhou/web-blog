import { http } from "../utils";
const URL = "/blog";

export const addArticle = (title, content) =>
  http.post(URL, { title, content }).then((res) => res.data);

export const deleteArticle = (id) => http.delete(`${URL}/${id}`);

export const updateArticle = (id, editArticleTitle, editArticleContent) =>
  http.put(`${URL}/${id}`, {
    title: editArticleTitle,
    content: editArticleContent,
  });
