type Props = {
    params: {category: Category};
};
async function NewsCategory({params: {category}}: Props) {
const news: NewsResponse= await fetch
  return (
    <div>NewsCategory</div>
  )
}

export default NewsCategory