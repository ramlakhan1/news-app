import { notFound } from "next/navigation"

type Propx = {
    searchParams?: Article;
}
function ArticlePage({searchParams}: Propx) {

  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage