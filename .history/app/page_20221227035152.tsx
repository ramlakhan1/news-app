import React from "react";
import { categories } from "../constants";
async function Homepage() {

    const news: NewsResponse = await fetch(categories)
  return <div>pagein</div>;
}

export default Homepage;
