import React from 'react'
import './MyArticles.scss'
import { Link, Outlet } from 'react-router-dom'

export default function MyArticles() {

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
					<tr>
						<td> <input type='checkbox' /> </td>
						<td>Cat is not Dog</td>
						<td>Text of the article</td>
						<td>Elisabeth Straingth</td>
						<td>4</td>
						<td><button>edit</button><button>del</button></td>
					</tr>
					<tr>
						<td> <input type='checkbox' /> </td>
						<td>Cat is not Dog</td>
						<td>Text of the article</td>
						<td>Elisabeth Straingth</td>
						<td>4</td>
						<td><button>edit</button><button>del</button></td>
					</tr>
				</tbody>
			</table>
			<Outlet />
		</div>
	)
}