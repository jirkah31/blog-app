import React from "react";
import "./Comment.scss";
import Avatar from "../Avatar/Avatar";
import avatar from "../../imgexample/avatar.png";

interface CommentPropsT {
  comment: {
    content: string;
    author: string;
    createdAt: string;
    score: number;
  };
}

const Comment: React.JSXElementConstructor<CommentPropsT> = ({
  comment,
}: CommentPropsT) => {
  const { content, author, createdAt, score } = comment;

  return (
    <div className="commentContainer">
      <Avatar avatar={avatar} />

      <div className="comment">
        <div className="infoComment">
          <h4>{author}</h4>
          <time>{createdAt}</time>
        </div>

        <p>{content}</p>

        <div className="counter">
          <h4>{score}</h4>
          <button type="button" className="arrow">
            +
          </button>
          <button type="button" className="arrow">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
