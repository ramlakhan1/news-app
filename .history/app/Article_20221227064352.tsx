import React from 'react'
type  Props = {
    article: Article;
}
function Article({article}: Props) {
  return (
    <article>
      {article.image && (
        <img src={article.image} alt={article.title} />
      )}
    </article>
  )
}

export default Article