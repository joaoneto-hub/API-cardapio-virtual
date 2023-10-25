import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi2vEZ7Q5k4rTIUysjg8VtCgh9nAZV1f8",
  authDomain: "cardapio-virtual-ffe2a.firebaseapp.com",
  projectId: "cardapio-virtual-ffe2a",
  storageBucket: "cardapio-virtual-ffe2a.appspot.com",
  messagingSenderId: "422314129927",
  appId: "1:422314129927:web:d663d734805003835e08a2",
  measurementId: "G-MZECVWYYW9",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

module.exports = db;
