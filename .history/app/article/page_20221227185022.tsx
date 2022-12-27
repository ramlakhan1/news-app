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

   const article: Article = searchParams;
  return (
    <article>
     <section>
        {article.image && (
            <img
            
        )}
     </section>
    </article>
  )
}

export default ArticlePage