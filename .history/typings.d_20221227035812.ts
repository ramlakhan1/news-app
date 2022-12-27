 type DataEntry = {
    author: string
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
