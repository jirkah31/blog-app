import { Link } from "react-router-dom";
import "./Article.scss";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import useImage from "../../helpers_hooks/useImage";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { PathsT } from "../../paths";

export interface ArticleAPIT {
  articleId: string;
  imageId: string;
  title: string;
  perex: string;
  author: string;
  createdAt: string;
}

const Article = ({
  articleId,
  title,
  perex,
  imageId,
  author,
  createdAt,
}: ArticleAPIT): React.FunctionComponentElement<ArticleAPIT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { queryImage } = useImage(imageId);
  const [image, setImage] = useState("");
  const darkMode = { "dark-mode": isDarkMode };
  const infoClassName = classNames("info", darkMode);
  const linkArticleClassName = classNames("link-article", darkMode);
  const articleImgClassName = classNames("article-img", darkMode);
  const mainPageArticleClassName = classNames("main-page-article", darkMode);
  const [year, month, day, hour, minute] = createdAt.match(/\d+/g)!.map(Number);
  const date = `${day}.${month}.${year} ${hour}:${minute}`;

  useEffect(() => {
    if (queryImage.isSuccess) {
      const base64ImageString = Buffer.from(
        queryImage.data.data,
        "binary"
      ).toString("base64");
      setImage(base64ImageString);
    }
  }, [queryImage.isSuccess, queryImage.data?.data]);

  return (
    <article className={linkArticleClassName}>
      <div
        className={articleImgClassName}
        style={{ backgroundImage: `data:image/*;base64,${image}` }}
      >
        <img
          className="article-img"
          src={`data:image/*;base64,${image}`}
          alt="dog"
          width="100%"
          height="100%"
        />
      </div>

      <div className={mainPageArticleClassName}>
        <h2>{title}</h2>
        <div className={infoClassName}>
          <h3>{author}</h3>
          <time className="time">{date}</time>
        </div>
        <p>{perex}</p>
        <div className={infoClassName}>
          <Link to={`${PathsT.RecentArticlePathT}/${articleId}`}>
            Read whole article
          </Link>
          <div>4 comments</div>
        </div>
      </div>
    </article>
  );
};

export default Article;
