import React, { useContext, useEffect } from "react"
import BookListItem from "../book-list-item";
import {makeStyles, Grid} from "@material-ui/core";
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Bookstore} from "../bookstore-service-context";

import './book-list.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0 5px",
  },
}));

const BookList = ({books, booksLoaded}) => {
  const bookStoreService = useContext(Bookstore)

  useEffect(() => {
    const books = bookStoreService.getBooks()
    booksLoaded(books)
  }, [])


  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={3}>
    {
      books.map((book) => {
        return (
          <Grid item sx={12} md={4} sm={6} key={book.id} >
            <BookListItem book={book} />
          </Grid>
        )
      })
    }
    </Grid>
  )
}

const mapStateToProps = ({books}) => {
  return {books};
}

export default connect(mapStateToProps, actions)(BookList);
