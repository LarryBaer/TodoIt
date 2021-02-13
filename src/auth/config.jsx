import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase