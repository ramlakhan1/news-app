import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}
function ArticlePage({searchParams}: Props) {
   
  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage