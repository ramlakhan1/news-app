import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
searchParams?: {term: string};
};

async function SearchPage