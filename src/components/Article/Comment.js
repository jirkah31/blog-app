import React from 'react'
import './Comment.scss'
import avatar from '../../imgexample/avatar.png'

function Comment() {
	return (
		<div className='commentContainer'>
			<div className='avatar'>
				<img className='avatarImg' src={avatar} alt='avatar' height='64px' />
			</div>
			
			<div className='comment'>
				<div className='infoComment'>
					<h4>Name Author</h4>
					<time>2 hours ago</time>
				</div>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur. 
				</p>

				<div className='counter'>
					<h4>+3</h4>
					<button type='button' className='arrow'>+</button>
					<button type='button' className='arrow'>-</button>
				</div>
			</div>
		</div>
	)
}

export default Comment;