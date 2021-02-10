import React, { useContext, useEffect, useState } from "react"
import BookListItem from "../book-list-item";
import { makeStyles, Grid, CircularProgress } from "@material-ui/core"
import {connect} from 'react-redux';
import {booksLoaded as booksLoadedAction} from '../../actions';
import {Bookstore} from "../bookstore-service-context";
import ErrorIndicator from "../error-indicator/error-indicator"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0 5px",
  },
}));

const BookList = ({books, booksLoadedAction, isBooksLoaded}) => {
  const [error, setError] = useState(false);
  const bookStoreService = useContext(Bookstore);

  const classes = useStyles();

  useEffect(() => {
    bookStoreService.getBooks(booksLoadedAction, () => {
      setError(true)
    })
  }, [])

  if (error) {
    return <ErrorIndicator />
  }

  if (!isBooksLoaded) {
    return (
      <Grid container justify="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>

    )
  }

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

const mapStateToProps = ({books, isBooksLoaded}) => {
  return {books, isBooksLoaded};
}

const mapDispatchToProps = { booksLoadedAction };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
