import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreData } from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const { bookId: currentBookId, image } = book;

  const handleMarkasRead = (id) => {
    addToStoreData;
  };
  return (
    <div>
      <h1>{bookId}</h1>
      <img className="w-36" src={image} alt="" />
      <div>
        <button
          onClick={() => handleMarkasRead(bookId)}
          className="btn mr-4 btn-outline btn-accent"
        >
          Read
        </button>
        <button className="btn  btn-accent">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
