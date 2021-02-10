import mockBooks from "../mock";


export default class BookstoreService {
  getBooks = () => {
    return mockBooks;
  }
}
