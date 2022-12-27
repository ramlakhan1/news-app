import React from 'react'
type  Props = {
    news: NewsResponse;
}
function Article({news}: Props) {
  return (
    <main>
        {news.data.map((article)=>)}
    </main>
  )
}

export default Article