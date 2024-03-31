import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogBox from "./BlogBox";

const Blog = () => {
  const blogData = useLoaderData();
  const sliceBlogData = blogData.slice(0, 8);

  return (
    <div>
      <div className=" grid grid-cols-3 gap-5">
        {sliceBlogData.map((blogs) => (
          <BlogBox key={blogs.id} blog={blogs} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
