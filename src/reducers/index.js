const initialState = {
  books: [],
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return store;
  }
};

export default reducer;
