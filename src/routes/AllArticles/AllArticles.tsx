import React from 'react'
import Article from '../../components/Article/Article'
import './AllArticles.scss'
import { Outlet, useLoaderData } from 'react-router-dom'
import { articleAPIT } from '../../articlesAPI';
import { articlesAPI } from '../../articlesAPI';
import { navLinks } from '../../links'

export const loader = () => {
  //tady bude následně probíhat načítání dat z API
  const loaderData = [...articlesAPI]
  const links = [...navLinks]
  return { loaderData, links }
}

export default function AllArticles() {
  const { loaderData }: any = useLoaderData();

  return (
    <div>
      <h1 className='title'>Recent articles</h1>
      {loaderData.map((article: articleAPIT) =>{
      const {id, image, title, content, author, date} = article
        return <Article key={id} id={id} image={image} author={author} date={date} content={content} title={title} />}
      )}
      <Outlet />
    </div>
  )
}
