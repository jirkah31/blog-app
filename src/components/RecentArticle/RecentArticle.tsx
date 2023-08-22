import React, { useEffect, useState } from "react";
import styles from "./RecentArticle.module.scss";
import Comment from "../Comment/Comment";
import { Buffer } from "buffer";
import { useParams } from "react-router-dom";
import useArticle from "../../helpers_hooks/useArticle";
import getFullDateFromISO from "../../helpers_function/getFullDateFromString";
import NewComment from "../NewComment/NewComment";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import useImage from "../../helpers_hooks/useImage";

const RecentArticle: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string>();
  const [imageId, setImageId] = useState<string>("");
  const { isLoddegIn } = useRouterContext();
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const { articleId } = useParams();
  const { query } = useArticle({ articleId });
  const { data: imageData, isSuccess: isImageSuccess } = useImage(imageId);
  const { isLoading: isArticleLoading, isSuccess: isArticleSuccess } = query;
  const { title, perex, createdAt, comments } = query.data?.data || {
    title: "",
    perex: "",
    createdAt: "",
    comments: [],
  };
  const { day, month, year } = getFullDateFromISO(createdAt);

  useEffect(() => {
    if (isArticleSuccess) {
      setImageId(query.data?.data.imageId);
    }
  }, [isArticleSuccess, query.data?.data.imageId]);

  useEffect(() => {
    if (isImageSuccess && imageData) {
      let base64ImageString = Buffer.from(imageData.data, "binary").toString(
        "base64"
      );
      setBase64Image(base64ImageString);
    }
  }, [imageData, isImageSuccess]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkMode]: isDarkMode,
      })}
    >
      {isArticleLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <article className={styles.comment}>
            <div>
              <h2 className={styles.articleTitle}>{title}</h2>
              <div className={styles.info}>
                <h3 className={styles.author}>author</h3>
                <time className={styles.date}>{`${day}.${month}.${year}`}</time>
              </div>
              <div style={{ width: "900px", height: "600px" }}>
                {base64Image && (
                  <img
                    className={styles.image}
                    src={`data:image/*;base64,${base64Image}`}
                    alt="dog"
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
              <p className={styles.content}>{perex}</p>
            </div>
          </article>
          <div className={styles.info}>
            <span>Comments ({comments.length})</span>
          </div>

          {isLoddegIn && <NewComment articleId={articleId} />}
          <div className={styles.info}>
            {comments.map((comment: any) => {
              //dotypovat jak semi povede implementovat comment functionality
              const oneComment = { ...comment };
              return <Comment comment={oneComment} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentArticle;
