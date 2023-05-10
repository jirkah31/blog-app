import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MyArticles.scss'
import { Link, Outlet } from 'react-router-dom'
import { useAccessToken } from '../../helpers_hooks/useAccessToken'
import { apiConfig } from '../../api_configs'

export default function MyArticles() {
  const [articles, setArticles] = useState([])
  const {accessToken} = useAccessToken()
  const allArticlesConfig = {
    ...apiConfig,
    url: '/articles',
    header: {
      ...apiConfig.headers,
      'Authorization': accessToken
    }
  }

  useEffect(() => {

    const getAllArticles = async (config: any) => {
      await axios(config)
      .then((response: any) => {
        setArticles(response.data.items)  })
      .catch((error: any) => {
        console.log("ERROR_articles" , error);
      });
    }
    getAllArticles(allArticlesConfig)
  })

  const handleDeleteArticle = async (articleId: string) => {
    const apiArticleConfig = {
      ...apiConfig,
      method: 'delete',
      url: `/articles/${articleId}`,
      headers: {
        ...apiConfig.headers,
        'Authorization': accessToken
      }
    }

    await axios(apiArticleConfig)
    .then((response: any) => {
      console.log('response.status: ', response.status)
    })
    .catch((error: any) => {
      console.log("ERROR_articles" , error);
    });

    const getAllArticles = async (config: any) => {
      await axios(config)
      .then((response: any) => {
        setArticles(response.data.items)  })
      .catch((error: any) => {
        console.log("ERROR_articles" , error);
      });
    }
    getAllArticles(allArticlesConfig)
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
              <button onClick={() => handleDeleteArticle(articleId)}>del</button>
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
