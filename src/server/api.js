import { http } from "../utils";
const URL = "/blog";

export const addArticle = (title, content) =>
  http.post(URL, { title, content }).then((res) => res.data);

export const deleteArticle = (id) => http.delete(`${URL}/${id}`);

export const updateArticle = (id, editTitle, editContent) =>
  http.put(URL, {
    id: id,
    title: editTitle,
    content: editContent,
  });

export const giveThumbUp = (id) =>
  http.post("/thumb-up", { id }).then((res) => res.thumbUp);
