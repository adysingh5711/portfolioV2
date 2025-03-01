// @flow strict
import BlogCard from "./ui/BlogCard";
import { blogs } from "@/data";

const Blogs = () => {
  return (
    <div id="blogs" className="relative my-12">
      <h1 className="heading mb-12">
        <span className="text-purple">Blogs</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:m-auto lg:w-[70%] gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs?.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
