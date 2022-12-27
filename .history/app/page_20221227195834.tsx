import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
async function Homepage() {

    const news: NewsResponse = await fetchNews(categories.join(','))
    //set time out
    
  return <div>
    <NewsList news={news} />
  </div>;
}

export default Homepage;
