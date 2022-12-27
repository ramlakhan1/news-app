"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/articles?${queryString}`;
    console.log(url);

    router.push(url);
  };
  return( <button
    onClick={handleClick}
    className="bg-orange-400 h-10 rou">
    </button>)
}

export default ReadMoreButton;
