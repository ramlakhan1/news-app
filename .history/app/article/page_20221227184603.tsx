import { notFound } from "next/navigation"

type Propx = {
    searchParams?: Article;
}
function ArticlePage({searchParams}: Props) {

  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage