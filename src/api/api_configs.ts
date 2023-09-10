import axios from "axios";

export enum PathsT {
  HomePathT = "/",
  AboutPathT = "about",
  LoginPathT = "login",
  MyArticlesPathT = "my-articles",
  CreateNewArticlePathT = "create-new-article",
  EditArticlePathT = "edit-article",
  ImagesPathT = "images",
  ArticlesPathT = "articles",
  RecentArticlePathT = "recent-article",
  CommentsPathT = "comments",
  TenantPathT = "tenants",
}
type navLinksT = {
  id: number;
  path: string;
  content: string;
};

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { "X-API-KEY": process.env.REACT_APP_X_API_KEY },
});

export const navLinks: navLinksT[] = [
  { id: 1, path: PathsT.HomePathT, content: "Bulldogs Articles" },
  { id: 2, path: PathsT.AboutPathT, content: "About Buldogs" },
];
