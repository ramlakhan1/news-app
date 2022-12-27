 type DataEntry = {
    author: string | null,
   category: string;
   country: string;
   description: string;
   image: string | null;
   language
 }
 type Pagination = {
    count: Int;
    limit: Int;

    offset: Int;

    total: Int;

 }
 type NewsResponse = {
    pagination: Pagination;
    data: DataEntry[];
 }
type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
