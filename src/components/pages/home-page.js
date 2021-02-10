import React from "react";
import {Box} from "@material-ui/core";

import BookList from "../book-list"
import ErrorBoundary from "../error-boundary"

const HomePage = () => {
  return (
    <Box>
      <ErrorBoundary>
        <BookList />
      </ErrorBoundary>
    </Box>
  )
};

export default HomePage;
