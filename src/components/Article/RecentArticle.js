import React from 'react'
import './RecentArticle.scss'
import Comment from './Comment'
import image from '../../imgexample/cat1.jpg' /* jen příklad smazat pak */
import avatar from '../../imgexample/avatar.png'
import RelatedArticles from './RelatedArticles'

function RecentArticle() {
	return (
		<div>
			<RelatedArticles />

			<div className='articleContainer'>
				<article className='commentArticle'>
					<div className=''>
						<h2>Why Do Cats Have Whiskers?</h2>
						<div className='info'>
							<h3>Author Author</h3>
							<time>02/12/22</time>
						</div>
						<div>
							<img className='articleImg' src={image} alt='cat' width='100%' height='100%' />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.
						</p>
					</div>
				</article>
				<div className='info'>
					<span>Comments (4)</span>
				</div>

				<div className='newComment'>
					<div className='avatarContainer'>
						<img className='avatarImg' src={avatar} alt='avatar' height='64px' />
					</div>
					<input type='text' placeholder='Join the discussion' />
				</div>

				<div className='comments'>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>
			</div>
		</div>
	)
}

export default RecentArticle;