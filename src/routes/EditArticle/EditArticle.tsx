import React, { useState } from 'react'
import './EditArticle.scss'
import postNewArticle from '../../helpers_handlers/postNewArticle'
import { useAccessToken } from '../../helpers_hooks/useAccessToken'
import postImage from '../../helpers_handlers/postImage'
import useArticle from '../../helpers_hooks/useArticle'
import { useParams } from 'react-router-dom'

export default function EditArticle() {
  const {articleId} = useParams()
  const article = useArticle(articleId)
  const { accessToken } = useAccessToken()
  const [title, setTitle] = useState("")
  const [perex, setPerex] = useState("")
  const [image, setImage] = useState<File>()


  const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    setTitle((event.target as HTMLInputElement).value)
  }

  const handlePerex = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setPerex((event.target as HTMLInputElement).value)
  }

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
      const newArticle = {
        title,
        perex,
      }
      postImage({accessToken, image})
    postNewArticle({accessToken, newArticle})
  }

  return (
    <div className='new-articles'>
      <form onSubmit={handleSubmit}>
        <div className='header'>
          <h1>Edit article</h1>
          <button type='submit'>Edit article</button>
        </div>

        <label htmlFor='title' className='input-name'>Article title</label><br />
        <input type='text' id='title' name='title' placeholder='My First Article' value={title} onChange={handleTitle}/><br />

        <p className='input-name'>Featured image</p><br/>
        <label htmlFor="filePicker" className='file-btn'>
          Upload an Image
        </label>
        <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} onChange={handleImage} /><br/>

        <label htmlFor='content' className='input-name'>Content</label><br />
        <textarea id='content' name='content' placeholder='Supports markdown. Yay!' value={perex} onChange={handlePerex}/>
      </form>
    </div>
  )
}
