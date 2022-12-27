import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}
function ArticlePage({searchParams}: Props) {
   if(
    (searchParams && Object.entries(searchParams))
   )
  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage