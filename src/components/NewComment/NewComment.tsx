import React, { useState } from "react";
import avatar from "../../imgexample/avatar.png";
import postComments from "../../helpers_function/postComments";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";

type PropsT = {
  articleId?: string;
};

const NewComment = ({ articleId }: PropsT) => {
  const [content, setContent] = useState("");
  const { accessToken } = useAppSelector((state) => state.accessToken.value);

  const handleComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (articleId && accessToken && content) {
      postComments({ articleId, accessToken, content });
    }
  };

  return (
    <div className="newComment">
      <div className="avatarContainer">
        <img className="avatarImg" src={avatar} alt="avatar" height="64px" />
      </div>
      <form onSubmit={handleComment}>
        <input
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
