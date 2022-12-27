import {gql} from "graphql-request";
const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,

) => {
    //Garph query
    const query = gql`
        query MyQuery(
            $access_key: String,
            $categories: String,
            $keywords
        ){
            myQuery(access_key: "4b82f8a4f7990337e1b839d38768bb38"){
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
    `


}


export default fetchNews;


// stepzen import curl "http://api.mediastack.com/v1/news?access_key=4b82f8a4f7990337e1b839d38768bb38&sources=business,sports"
