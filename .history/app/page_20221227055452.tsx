import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
async function Homepage() {

    const news: NewsResponse = await fetchNews(categories.join(','))
    console.log
  return <div>pagein</div>;
}

export default Homepage;
