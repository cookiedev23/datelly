import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  /* apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID, */
  apiKey: "AIzaSyAG4XvhqEhnPpxx0SlVc0dRd76j025Fr5c",
  authDomain: "datelly-b1737.firebaseapp.com",
  projectId: "datelly-b1737",
  storageBucket: "datelly-b1737.appspot.com",
  messagingSenderId: "472252602460",
  appId: "1:472252602460:web:53dbc2906bd9156ff42e99",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
