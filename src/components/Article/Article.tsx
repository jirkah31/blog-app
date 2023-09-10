import React from "react";
import { Link } from "react-router-dom";
import styles from "./Article.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import useImage from "../../helpers_hooks/useImage";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { PathsT } from "../../api/api_configs";

export interface ArticleAPIT {
  articleId: string;
  imageId: string;
  title: string;
  perex: string;
  createdAt: string;
}

const Article = ({
  articleId,
  title,
  perex,
  imageId,
  createdAt,
}: ArticleAPIT): React.FunctionComponentElement<ArticleAPIT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { data, isSuccess: isImageSuccess } = useImage(imageId);
  const [image, setImage] = useState("");
  const [year, month, day, hour, minute] = createdAt.match(/\d+/g)!.map(Number);
  const date = `${day}.${month}.${year} ${hour}:${minute}`;

  useEffect(() => {
    if (isImageSuccess && data) {
      const base64ImageString = Buffer.from(data.data, "binary").toString(
        "base64",
      );
      setImage(base64ImageString);
    }
  }, [isImageSuccess, data]);

  return (
    <article
      data-cy="article"
      className={classNames(styles.article, { [styles.darkMode]: isDarkMode })}
    >
      <div
        className={styles.articleImg}
        style={{ backgroundImage: `data:image/*;base64,${image}` }}
      >
        <img
          className={styles.articleImg}
          src={`data:image/*;base64,${image}`}
          alt="dog"
          width="100%"
          height="100%"
        />
      </div>

      <div className={styles.articleContent}>
        <h2>{title}</h2>
        <div className={styles.info}>
          <time className="time">{date}</time>
        </div>
        <p className={styles.paragraf}>{perex}</p>
        <div className={styles.info}>
          <Link
            data-cy="article-link"
            className={styles.link}
            to={`${PathsT.RecentArticlePathT}/${articleId}`}
          >
            Read whole article
          </Link>
          <div>4 comments</div>
        </div>
      </div>
    </article>
  );
};

export default Article;
