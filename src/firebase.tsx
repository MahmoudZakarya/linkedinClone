import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDzYRxUAUrHyA0hnMek_tiI3vUAxN4YW3Y",
  authDomain: "linkedin-clone-3c998.firebaseapp.com",
  projectId: "linkedin-clone-3c998",
  storageBucket: "linkedin-clone-3c998.appspot.com",
  messagingSenderId: "780392318457",
  appId: "1:780392318457:web:5edca5a6936e489a74a928"
};


const firebaseApp = initializeApp(firebaseConfig);
const dataBase =  getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export{dataBase, auth}
