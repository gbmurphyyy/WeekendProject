// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiT_AOSZNzH_9MVw3LzHN7YU_oQUqxhH8',
  authDomain: 'weekendproject-c0b49.firebaseapp.com',
  projectId: 'weekendproject-c0b49',
  storageBucket: 'weekendproject-c0b49.appspot.com',
  messagingSenderId: '564818015217',
  appId: '1:564818015217:web:b110a7ba0f065906dd4a50',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
