 import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

 const firebaseConfig = {
  apiKey: "AIzaSyBZRjs4DpiT8b_aZIh7rpOicGzYbbKbfLk",
  authDomain: "study-hub-abdf8.firebaseapp.com",
  projectId: "study-hub-abdf8",
  storageBucket: "study-hub-abdf8.firebasestorage.app",
  messagingSenderId: "821367321066",
  appId: "1:821367321066:web:45a32680a8b976a017c293"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
