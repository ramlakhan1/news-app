import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}
function ArticlePage({searchParams}: Props) {
   if(
    (searchParams && Object.entries(searchParams).length === 0) || !searchParams
   ) {
    return notFound();
   }
  return (
    <article>
        
    </article>
  )
}

export default ArticlePage