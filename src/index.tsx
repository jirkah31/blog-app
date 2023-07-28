import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import About from "./routes/About/About";
import Login from "./routes/Login/Login";
import AllArticles from "./routes/AllArticles/AllArticles";
import MyArticles from "./routes/ListOfArticles/ListOfArticles";
import NewArticle from "./routes/NewArticle/NewArticle";
import RecentArticle from "./components/RecentArticle/RecentArticle";
import EditArticle from "./routes/EditArticle/EditArticle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PathsT } from "./paths";

const router = createBrowserRouter([
  {
    path: PathsT.HomePathT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PathsT.HomePathT,
        element: <AllArticles />,
      },
      {
        path: PathsT.AboutPathT,
        element: <About />,
      },
      {
        path: "recent-article/:articleId",
        element: <RecentArticle />,
      },
      {
        path: PathsT.LoginPathT,
        element: <Login />,
      },
      {
        path: PathsT.MyArticlesPathT,
        element: <MyArticles />,
      },
      {
        path: PathsT.CreateNewArticlePathT,
        element: <NewArticle />,
      },
      {
        path: "edit-article/:articleId",
        element: <EditArticle />,
      },
    ],
  },
]);

const queryCLient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryCLient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
