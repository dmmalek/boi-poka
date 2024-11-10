import React from "react";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-50 p-10">
          <img className="h-60 rounded-2xl" src={image} alt={bookName} />
        </figure>
        <div className="card-actions justify-start">
          {tags.map((tag, idx) => (
            <p className="px-3" key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
        </div>
        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex justify-center items-center">
            <p>{rating}</p>
            <CiStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
