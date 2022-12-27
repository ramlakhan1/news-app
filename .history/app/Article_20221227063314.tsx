import React from 'react'
type  Props = {
    news: NewsResponse;
}
function Article({news}: Props) {
  return (
    <main>
        {news.data}
    </main>
  )
}

export default Article