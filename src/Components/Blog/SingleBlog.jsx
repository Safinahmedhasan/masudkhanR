import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2";

const SingleBlog = () => {
  const blog = useLoaderData();
  const { title, body } = blog;

  const Delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="card w-96 bg-base-400 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <div className="card-actions justify-end">
              <button onClick={Delete} className="btn btn-primary">
                Delete
              </button>
              <button className="btn btn-ghost">Don't</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
