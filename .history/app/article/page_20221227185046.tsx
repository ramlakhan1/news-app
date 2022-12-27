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
            className="h-50 max-w-md mx-auto "
        )}
     </section>
    </article>
  )
}

export default ArticlePage