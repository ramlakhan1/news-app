import React from 'react'
type Props = {
    news : NewsResponse;
};

function NewsList({news} : Props) {

  return (
    <main>
        {news.data}
    </main>
  )
}

export default NewsList