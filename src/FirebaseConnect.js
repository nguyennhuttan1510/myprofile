import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyD4h6h4XlAj9HkLzaeB_ar2NkeYRJVF1p8',
  authDomain: 'myprofile-ff120.firebaseapp.com',
  databaseURL: 'https://myprofile-ff120.firebaseio.com',
  projectId: 'myprofile-ff120',
  storageBucket: 'myprofile-ff120.appspot.com',
  messagingSenderId: '910563571972',
  appId: '1:910563571972:web:21d4bfd9acc746a39cb851',
  measurementId: 'G-THSNDESEZS'
};
// Initialize Firebase
export const FirebaseConnect = firebase.initializeApp(firebaseConfig);
