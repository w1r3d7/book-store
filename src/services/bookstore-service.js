import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCpZOIBcoYeAwLXOfVIuzyLJVJysVJjOSM",
  authDomain: "book-store-ccb48.firebaseapp.com",
  databaseURL: "https://book-store-ccb48-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-store-ccb48",
  storageBucket: "book-store-ccb48.appspot.com",
  messagingSenderId: "552257563340",
  appId: "1:552257563340:web:809980d3c8dbddca7f7069"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default class BookstoreService {
  getBooks = async (action, error) => {
    const books = database.ref('books');
    await books.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        return action(data);
      }

      return error();
    });
  }
}
