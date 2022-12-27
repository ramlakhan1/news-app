import React from 'react'
type Props = {
    news : NewsResponse;
};

function NewsList({news} : Props) {

  return (
    <main>
        {news.data.map(())}
    </main>
  )
}

export default NewsList