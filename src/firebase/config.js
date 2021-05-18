import firebase from "firebase/app";
// import AuthPersist from "@/helper/user.helper.js";
// import store from "../store";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2c4Zns9TH-yvxPyT6BLDX2xBOiOpFsXw",
  authDomain: "vue-training-7d333.firebaseapp.com",
  projectId: "vue-training-7d333",
  storageBucket: "vue-training-7d333.appspot.com",
  messagingSenderId: "1000330735678",
  appId: "1:1000330735678:web:bcf61a56994e51198f616f",
};
firebase.initializeApp(firebaseConfig);
// utils
const db = firebase.firestore();
const auth = firebase.auth();

export let googleAuth = new firebase.auth.GoogleAuthProvider();
// AuthPersist();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  firebaseConfig,
  likesCollection,
};
