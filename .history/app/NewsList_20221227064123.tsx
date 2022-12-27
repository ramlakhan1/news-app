import React from 'react'
import Article from './Article';
type Props = {
    news : NewsResponse;
};

function NewsList({news} : Props) {

  return (
    <main className=''>
        {news.data.map((article)=> (
            <Article article={article} />

        ))}
    </main>
  )
}

export default NewsList