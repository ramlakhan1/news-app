import React from 'react'
type  Props = {
    article: Article;
}
function Article({article}: Props) {
  return (
    <article>
      {article.image && (
        <img src={article.image} alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"
         />
      )}
       <div>
        <div>
            <h2>
                {article.title}

            </h2>
            
        </div>

       </div>
    </article>
  )
}

export default Article