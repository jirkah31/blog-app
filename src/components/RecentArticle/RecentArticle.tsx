import React, { useEffect, useState } from "react";
import "./RecentArticle.scss";
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
  const { queryImage } = useImage(imageId);
  const { isLoading, isSuccess } = query;
  const { title, perex, createdAt, comments } = query.data?.data || {
    title: "",
    perex: "",
    createdAt: "",
    comments: [],
  };
  const { day, month, year } = getFullDateFromISO(createdAt);
  const darkModeContainer = classNames("article-container", {
    "dark-mode": isDarkMode,
  });
  // Tady to musím poupravit aby to správně načítalo obrázek, zatím se zdá
  //že kontroluju dvakrát to samý a stačil by mi možná jen jeden useEffects
  useEffect(() => {
    if (isSuccess) {
      setImageId(query.data?.data.imageId);
    }
  }, [isSuccess, query.data?.data.imageId]);

  useEffect(() => {
    if (queryImage.isSuccess) {
      let base64ImageString = Buffer.from(
        queryImage.data.data,
        "binary"
      ).toString("base64");
      setBase64Image(base64ImageString);
    }
  }, [queryImage.data, queryImage.isSuccess]);

  return (
    <div>
      <div className={darkModeContainer}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <article className="comment-article">
              <div>
                <h2 className="article-title">{title}</h2>
                <div className="info">
                  <h3 className="article-author">author</h3>
                  <time className="article-date">{`${day}.${month}.${year}`}</time>
                </div>
                <div style={{ width: "900px", height: "600px" }}>
                  {base64Image && (
                    <img
                      className="article-img"
                      src={`data:image/*;base64,${base64Image}`}
                      alt="dog"
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
                <p className="content">{perex}</p>
              </div>
            </article>
            <div className="info">
              <span>Comments ({comments.length})</span>
            </div>

            {isLoddegIn && <NewComment articleId={articleId} />}
            <div className="comments">
              {comments.map((comment: any) => {
                //dotypovat jak semi povede implementovat comment functionality
                const oneComment = { ...comment };
                return <Comment comment={oneComment} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentArticle;
