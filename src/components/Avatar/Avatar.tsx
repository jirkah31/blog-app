import React from "react";


const Avatar = ({avatar}: {avatar: string}) => {

  return (
    <div className='avatar'>
				<img className='avatarImg' src={avatar} alt='avatar' height='64px' />
			</div>
  )
}

export default Avatar;
