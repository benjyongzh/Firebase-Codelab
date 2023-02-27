/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyABKITcb5ySlPE2w3G3VYy6Bo3IW0fkbWM",
  authDomain: "friendlychat-329a8.firebaseapp.com",
  projectId: "friendlychat-329a8",
  storageBucket: "friendlychat-329a8.appspot.com",
  messagingSenderId: "834316921200",
  appId: "1:834316921200:web:ff99cd9b75dfe4d09707b5"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}