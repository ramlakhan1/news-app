"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
    const router = useRouter() ;

  return <div></div>;
}

export default ReadMoreButton;
