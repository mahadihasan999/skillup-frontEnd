import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDUR_MKZqn_nUilaNeQhJTllocr_LWsL-U",
    authDomain: "skillup-bd.firebaseapp.com",
    projectId: "skillup-bd",
    storageBucket: "skillup-bd.appspot.com",
    messagingSenderId: "913940261570",
    appId: "1:913940261570:web:8af2b72c1079b39d08e95b"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;