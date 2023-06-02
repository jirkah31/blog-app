import React from "react";
import "./RecentArticle.scss";
import Comment from "../Comment/Comment";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import { useParams } from "react-router-dom";
import image2 from "../../imgexample/image2.jpg";
import useArticle from "../../helpers_hooks/useArticle";
import getFullDateFromISO from "../../helpers_function/getFullDateFromString";
import NewComment from "../NewComment/NewComment";
import useRouterContext from "../../helpers_hooks/useRouterContext";

function RecentArticle() {
  const { articleId } = useParams();
  const article = useArticle({ articleId });
  const { title, perex, createdAt } = article;
  const { day, month, year } = getFullDateFromISO(createdAt);
  const date = `${day}.${month}.${year}`;
  const { isLoddegIn, accessToken } = useRouterContext();
  const comments = article.comments || [];
  const commentsLength = comments.length;

  return (
    <div>
      {/* <RelatedArticles /> */}

      <div className="articleContainer">
        <article className="commentArticle">
          <div className="">
            <h2>{title}</h2>
            <div className="info">
              <h3>author</h3>
              <time>{date}</time>
            </div>
            <div>
              <img
                className="articleImg"
                src={image2}
                alt="cat"
                width="100%"
                height="100%"
              />
            </div>
            <p>{perex}</p>
          </div>
        </article>
        <div className="info">
          <span>Comments ({commentsLength})</span>
        </div>

        {isLoddegIn && (
          <NewComment accessToken={accessToken} articleId={articleId} />
        )}

        <div className="comments">
          {comments.map((comment: any) => {
            //dotypovat jak semi povede implementovat comment functionality
            const oneComment = { ...comment };
            return <Comment comment={oneComment} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentArticle;
