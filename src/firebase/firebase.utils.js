import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyB55XfrW7FM7xL__-DBPiIhZI4B6yxMdVo",
    authDomain: "crwn-db-28f68.firebaseapp.com",
    databaseURL: "https://crwn-db-28f68.firebaseio.com",
    projectId: "crwn-db-28f68",
    storageBucket: "crwn-db-28f68.appspot.com",
    messagingSenderId: "575815590121",
    appId: "1:575815590121:web:0ff83522eed7c4e0005078",
    measurementId: "G-XL77V0MQHM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user. ', error.message);

        }
    }
    return userRef;
}

/*const config = {
    apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
    authDomain: 'crwn-db.firebaseapp.com',
    databaseURL: 'https://crwn-db.firebaseio.com',
    projectId: 'crwn-db',
    storageBucket: 'crwn-db.appspot.com',
    messagingSenderId: '850995411664',
    appId: '1:850995411664:web:7ddc01d597846f65'
};
*/

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;