import React from "react";

interface AvatarPropsT {
  avatar: string;
}

const Avatar = (
  props: AvatarPropsT
): React.FunctionComponentElement<AvatarPropsT> => {
  return (
    <div className="avatar">
      <img
        className="avatarImg"
        src={props.avatar}
        alt="avatar"
        height="64px"
      />
    </div>
  );
};

export default Avatar;
