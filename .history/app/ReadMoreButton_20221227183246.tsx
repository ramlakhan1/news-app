"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
    const router = useRouter() ;

       const handleClick = () => {
        const queryString = Object.entries(article)
        .map(())
       }
  return <div></div>;
}

export default ReadMoreButton;
