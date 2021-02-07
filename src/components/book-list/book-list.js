import React from "react";
import BookListItem from "../book-list-item"

import './book-list.css';

const BookList = ({books}) => {
  return (
    <li>
      {
        books.map((book) => {
          return (
            <li key={book.id} >
              <BookListItem book={book} />
            </li>
          )
        })
      }
    </li>
  )
}

export default BookList;
