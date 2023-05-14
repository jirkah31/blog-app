import React, { useEffect, useState } from 'react'
import './MyArticles.scss'
import { Link, Outlet } from 'react-router-dom'
import { useAccessToken } from '../../helpers_hooks/useAccessToken'
import deleteArticle from '../../helpers_handlers/deleteArticle'
import useAllArticles from '../../helpers_hooks/useAllArticles'

export default function MyArticles() {
  const loadArticles = useAllArticles()
  const [articles, setArticles] = useState([])
  const {accessToken} = useAccessToken()

  useEffect(() => {
    setArticles(loadArticles)
  },[loadArticles])

  const handleDeleteArticle = async (articleId: string) => {
    await deleteArticle({articleId, accessToken})
    await setArticles(loadArticles)
  }

  return (
    <div className='my-articles'>
      <div className='header'>
        <h1>My articles</h1>

        <Link to="/create-new-article">
          <button type="button">
            Create new article
          </button>
        </Link>
      </div>

      <table className='table-articles'>
        <tbody>
          <tr>
            <th><input type='checkbox' /></th>
            <th>Article title</th>
            <th>Perex</th>
            <th>Author</th>
            <th># of comments</th>
            <th>Action</th>
          </tr>
          {articles.map((article) => {
            const {articleId, title, perex} = article
            return (
          <tr key={articleId}>
            <td> <input type='checkbox' /> </td>
            <td>{title}</td>
            <td>{perex}</td>
            <td>Elisabeth Straingth</td>
            <td>4</td>
            <td>
              <Link to={`/edit-article/${articleId}`}>
                <button>edit</button>
              </Link>
              <button onClick={() => handleDeleteArticle(articleId)}>delete</button>
            </td>
          </tr>

            )
          })}
        </tbody>
      </table>
      <Outlet />
    </div>
  )
}
