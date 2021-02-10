const initialState = {
  books: [],
  isBooksLoaded: false,
  cart: [],
  favorite: [],
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        ...store,
        books: action.payload,
        isBooksLoaded: true,
      };
    default:
      return store;
  }
};

export default reducer;
