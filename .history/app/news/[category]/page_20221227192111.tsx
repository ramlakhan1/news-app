import fetchNews from "../../../lib/fetchNews";

type Props = {
    params: {category: Category};
};
async function NewsCategory({params: {category}}: Props) {
const news: NewsResponse= await fetchNews(category);
  return (
    <div>

        
    </div>
  )
}

export default NewsCategory