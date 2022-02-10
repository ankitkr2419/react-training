import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BlogCard } from "../../pages/BlogCard";
import { sagaActions } from "../../sagas/sagaAction";
// import { blogActions } from "../../store/blog-slice";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, [dispatch]);

  return (
    <>
      {blogs.blogs.map((blog) => (
        <BlogCard id={blog.id} title={blog.title} body={blog.body}></BlogCard>
      ))}
    </>
  );
};

export default Blogs;
