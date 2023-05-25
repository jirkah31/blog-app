import { Link } from "react-router-dom";
import "./Article.scss";
import classNames from "classnames";

export type articleAPIT = {
  id?: string;
  image?: HTMLImageElement;
  title?: string;
  perex?: string;
  author?: string;
  date?: string;
  isDarkMode: boolean;
};

const Article = ({
  id,
  title,
  perex,
  image,
  author,
  date,
  isDarkMode,
}: articleAPIT) => {
  const darkMode = { "dark-mode":isDarkMode }
  const infoClassName = classNames("info", darkMode);
  const linkArticleClassName = classNames("link-article", darkMode);
  const articleImgClassName = classNames("article-img", darkMode);
  const mainPageArticleClassName = classNames("main-page-article", darkMode);

  return (
    <article className={linkArticleClassName}>
      <div
        className={articleImgClassName}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={mainPageArticleClassName}>
        <h2>{title}</h2>
        <div className={infoClassName}>
          <h3>{author}</h3>
          <time className="time">{date}</time>
        </div>
        <p>{perex}</p>
        <div className={infoClassName}>
          <Link to={`/recent-article/${id}`}>Read whole article</Link>
          <div>4 comments</div>
        </div>
      </div>
    </article>
  );
};

export default Article;
