import React from 'react'
import './Articles.scss'
import image from '../../imgexample/cat1.jpg'
import { Outlet, Link } from 'react-router-dom'

export default function Articles() {

	const Article = () => {
		return (
			<Link to="/article" className='link-article'>
				<article>
					<div className='articleImg' style={{ backgroundImage: `url(${image})` }}></div>

					<div className='main-page-article'>
						<h2>Why Do Cats Have Whiskers?</h2>
						<div className='info'>
							<h3>Author Name</h3>
							<time className='time'>02/12/22</time>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod dolorum libero ducimus esse iusto eveniet placeat doloremque sint sequi praesentium expedita voluptates fuga maiores quis nihil exercitationem eius! Ducimus officia deleniti esse dolores ad natus cum quia iusto hic voluptatum quod, possimus corporis pariatur.
						</p>
						<div className='info'>
							<Link to="/article">Read whole article</Link>
							<div>4 comments</div>
						</div>
					</div>

					<Outlet />
				</article>
			</Link>
		)
	}

	return (
		<div>
			<h1 className='title'>Recent articles</h1>
			<Article />
			<Article />
			<Article />
			<Article />
			<Article />
			<Article />
		</div>
	)
}