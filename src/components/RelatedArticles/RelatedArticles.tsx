import React from 'react';
import './RelatedArticles.scss'

function RelatedArticles () {

const RelatedArticle = () => {
	return (
		<div className='preview'>
			<h3>How much food Should Cat eat?</h3>
			<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum, ratione assumenda consectetur facere quod ...
			</p>
		</div>
	)
}

	return (
		<div  className='relatedContainer'>
			<h2>Related articles</h2>

			<RelatedArticle />
			<RelatedArticle />
			<RelatedArticle />
			<RelatedArticle />
		</div>
	)
}

export default RelatedArticles;
