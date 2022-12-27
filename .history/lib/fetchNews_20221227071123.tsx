import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByimage";
const fetchNews = async (
  category?: Category | String,
  keywords?: String,
  isDynamic?: boolean
) => {
  //Garph query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: $
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://unterkrozingen.stepzen.net/api/exiled-eel/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("lodding >>>", category, keywords);

  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=4b82f8a4f7990337e1b839d38768bb38&sources=business,sports"
