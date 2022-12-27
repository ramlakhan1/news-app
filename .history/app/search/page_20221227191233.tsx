import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
searchParams?: {term: string};
};

async function SearchPage({searchParams}: Props) {
    const news: NewsResponse = await fetchNews(
        "general",
        searchParams?.term,
        true
    );
    return (
        <div>
            <h1>Search result for: {}</h1>
        </div>
    )
}