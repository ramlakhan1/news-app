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
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
            />
        )}
        <div className="px-10">
            <h1 className="headerTitle px-0 no-underline pb-2">
                {article.title}
            </h1>

            <div>
                <h2>By: {article.a}</h2>
            </div>
        </div>
     </section>
    </article>
  )
}

export default ArticlePage