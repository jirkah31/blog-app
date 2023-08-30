import React, { useState } from "react";
import styles from "./NewComment.module.scss";
import avatar from "../../imgexample/avatar.png";
import postComments from "../../helpers_function/postComments";
import { useAppSelector } from "../../redux/reduxHooks";

type PropsT = {
  articleId?: string;
};

const NewComment = ({ articleId }: PropsT) => {
  const [content, setContent] = useState<string>("");
  const { accessToken } = useAppSelector((state) => state.accessToken.value);

  const handleComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (articleId && accessToken && content) {
      postComments({ articleId, accessToken, content });
    }
  };

  return (
    <div className={styles.newComment}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatarImg} src={avatar} alt="avatar" />
      </div>
      <form onSubmit={handleComment}>
        <input
          className={styles.input}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          type="text"
          placeholder="Join the discussion"
        />
      </form>
    </div>
  );
};

export default NewComment;
