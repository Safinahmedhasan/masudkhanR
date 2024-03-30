import { useEffect, useState } from "react";
import PostBox from "./PostBox";

const Post = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data));
  });

  const Top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <div className="container mx-auto grid grid-cols-3 gap-5">
              {postData.map(post => <PostBox post={post}></PostBox>)}
      </div>
    </main>
  );
};

export default Post;
