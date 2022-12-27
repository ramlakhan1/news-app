import fetchNews from "../../../lib/fetchNews";
import 
type Props = {
    params: {category: Category};
};
async function NewsCategory({params: {category}}: Props) {
const news: NewsResponse= await fetchNews(category);
  return (
    <div>

        <h1 className="headerTitle">{category}</h1>
    </div>
  )
}

export default NewsCategory