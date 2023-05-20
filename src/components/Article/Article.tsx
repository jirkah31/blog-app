import { Link } from 'react-router-dom'

export type articleAPIT = {
  id?: string,
  image?: HTMLImageElement,
  title?: string,
  perex?: string,
  author?: string,
  date?: string,
}

const Article = ({ id, title, perex, image, author, date  }: articleAPIT) => {
  return (
    <Link to={`/recent-article/${id}`} className='link-article'>
      <article>
        <div className='articleImg' style={{ backgroundImage: `url(${image})` }}></div>

        <div className='main-page-article'>
          <h2>{title}</h2>
          <div className='info'>
            <h3>{author}</h3>
            <time className='time'>{date}</time>
          </div>
          <p>{perex}</p>
          <div className='info'>
            <Link to={`/recent-article/${id}`}>Read whole article</Link>
            <div>4 comments</div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Article;
