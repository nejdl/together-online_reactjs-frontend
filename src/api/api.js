// import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// initialize firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// collection references
export const editorialCollection = collection(db, 'editorial');
export const shapesCollection = collection(db, 'shapes');
export const emojisCollection = collection(db, 'emojis');
export const storyCollection = collection(db, 'story');
export const chatCollection = collection(db, 'chat');
export const chatQ1Collection = collection(db, 'chat_q1');
export const chatQ2Collection = collection(db, 'chat_q2');
export const chatQ3Collection = collection(db, 'chat_q3');
export const chatQ4Collection = collection(db, 'chat_q4');
export const chatQ5Collection = collection(db, 'chat_q5');
export const chatQ6Collection = collection(db, 'chat_community-guidelines');

// sign in anonymously
export const auth = getAuth();
export const createAnonymousUser = () => {
  signInAnonymously(auth)
    .then(() => {
      console.log('Signed in as anonymous user.');
    })
    .catch((error) => {
      console.error(error);
    });
};

// EDITORIAL
// add document
export const createUserDocument = (userId) => {
  setDoc(doc(db, 'editorial', userId), {
    timestamp: serverTimestamp(),
  })
    .then(() => {
      // console.log('Created user document.');
    })
    .catch((error) => {
      console.error(error);
    });
};

// update document
export const updateUserDocument = async (userId) => {
  let docRef = doc(db, 'editorial', userId);

  try {
    await updateDoc(docRef, {
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error(error);
  }
};

// list online users
export const listOnlineUsers = async (expirationTime) => {
  try {
    // get all user documents
    const documents = await getDocs(editorialCollection);

    // list all user documents where timestamp is not older than exired timestamp
    let onlineUsers = [];
    let users = [];
    documents.docs.forEach((doc) => {
      const docData = doc.data();
      const documentTimestamp = docData.timestamp;
      // FIX ME (instead of big time buffer use snapshot changes)
      const timeBuffer = 1700;
      const expiredTimestamp = Date.now() - (expirationTime + timeBuffer);
      if (documentTimestamp >= expiredTimestamp) {
        onlineUsers.push({ ...docData, id: doc.id });
      }
    });
    const numberOfOnlineUsers = onlineUsers.length;
    return numberOfOnlineUsers;
  } catch (error) {
    console.error(error);
  }
};

// EMOJIS
export const createDocument = async (data, collectionReference) => {
  try {
    await addDoc(collectionReference, {
      ...data,
    });
  } catch (error) {
    console.error(error);
  }
};

// queries

// // listen to a collection
// const unsubscribeCollection = onSnapshot(editorialCollection, (snapshot) => {
//   let books = [];
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(books);
// });

// // add document
// addDoc(colRef, {
//   title: addBookForm.title.value,
//   author: addBookForm.author.value,
//   createdAt: serverTimestamp(),
// }).then(() => {
//   addBookForm.reset();
// });

// // delete doc
// const docRef = doc(db, 'books', deleteBookForm.id.value);

// deleteDoc(docRef).then(() => {
//   deleteBookForm.reset();
// });
