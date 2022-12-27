import { notFound } from "next/navigation"

type Propx = {
    searchParams?: Article;
}
function ArticlePage({search}) {
  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage