import React from "react";

import './book-list-item.css';

const BookListItem = ({book}) => {
  const {author, title} = book;
  return (
    <>
      <span>{author}</span>
      <span>{title}</span>
    </>
  )
}

export default BookListItem;
