import React from 'react'
import './NewArticle.scss'

export default function NewArticle() {
	return (
		<div className='new-articles'>
			<div className='header'>
				<h1>Create new article</h1>
				<button type='button'>Publish article</button>
			</div>

			<form>
				<label htmlFor='title' className='input-name'>Article title</label><br />
				<input type='text' id='title' name='title' placeholder='My First Article' /><br />

				<p className='input-name'>Featured image</p><br/>
				<label htmlFor="filePicker" className='file-btn'>
					Upload an Image
				</label>
				<input id="filePicker" style={{ visibility: "hidden" }} type={"file"} /><br/>

				<label htmlFor='content' className='input-name'>Content</label><br />
				<textarea id='content' name='content' placeholder='Supports markdown. Yay!' />
			</form>
		</div>
	)
}