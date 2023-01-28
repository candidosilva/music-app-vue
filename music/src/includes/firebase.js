import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaotDV52XxPb4UN4hNNfxQNvOCWgN667s",
  authDomain: "music-81837.firebaseapp.com",
  projectId: "music-81837",
  storageBucket: "music-81837.appspot.com",
  messagingSenderId: "670444969181",
  appId: "1:670444969181:web:201e84c4fe0f5b3f434f34",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
