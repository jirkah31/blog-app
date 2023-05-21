import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import About from "./routes/About/About";
import Login from "./routes/Login/Login";
import Navigation from "./routes/Navigation/Navigation";
import AllArticles from "./routes/AllArticles/AllArticles";
import MyArticles from "./routes/ListOfArticles/ListOfArticles";
import NewArticle from "./routes/NewArticle/NewArticle";
import RecentArticle from "./components/RecentArticle/RecentArticle";
import EditArticle from "./routes/EditArticle/EditArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllArticles />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "recent-article/:articleId",
        element: <RecentArticle />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-articles",
        element: <MyArticles />,
      },
      {
        path: "create-new-article",
        element: <NewArticle />,
      },
      {
        path: "edit-article/:articleId",
        element: <EditArticle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
