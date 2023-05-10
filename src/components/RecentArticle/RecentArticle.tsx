import React, { useEffect, useState} from 'react'
import './RecentArticle.scss'
import Comment from '../Comment/Comment'
import avatar from '../../imgexample/avatar.png'
import RelatedArticles from '../RelatedArticles/RelatedArticles'
import { articlesAPI } from '../../articlesAPI'
import { LoaderFunctionArgs, useParams } from 'react-router-dom'
import image2 from '../../imgexample/image2.jpg'
import useArticle from '../../helpers_hooks/useArticle'
import getFullDateFromISO from '../../helpers_function/getFullDateFromString'

export const loader = ({ params }:LoaderFunctionArgs) => {
  const article = articlesAPI.filter(article => {
    return article.id === params.articleId
  })
    return { article }
  }

function RecentArticle() {
  const { articleId } = useParams()
  const article = useArticle(articleId)
  const {title, perex, createdAt} = article
  const {day, month, year} = getFullDateFromISO(createdAt)
  const date = `${day}.${month}.${year}`

  return (
    <div>
      <RelatedArticles />

      <div className='articleContainer'>
        <article className='commentArticle'>
          <div className=''>
            <h2>{title}</h2>
            <div className='info'>
              <h3>author</h3>
              <time>{date}</time>
            </div>
            <div>
              <img className='articleImg' src={image2} alt='cat' width='100%' height='100%' />
            </div>
            <p>{perex}</p>
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
