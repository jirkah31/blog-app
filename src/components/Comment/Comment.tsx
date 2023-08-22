import React from "react";
import styles from "./Comment.module.scss";
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
    <div className={styles.scommentContainer}>
      <Avatar avatar={avatar} />

      <div className={styles.comment}>
        <div className={styles.infoComment}>
          <h4 className={styles.author}>{author}</h4>
          <time className={styles.time}>{createdAt}</time>
        </div>

        <p className={styles.paragraf}>{content}</p>

        <div className={styles.counter}>
          <h4 className={styles.score}>{score}</h4>
          <button type="button" className={styles.arrow}>
            +
          </button>
          <button type="button" className={styles.arrow}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
