import {createContext} from "react";

const Bookstore = createContext();

const {
  Provider: BookstoreServiceProvider
} = Bookstore;

export {BookstoreServiceProvider, Bookstore};
