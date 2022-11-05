
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcVTYe9Ulc2SSrONzrFZIRbrS3MDFoX5U",
  authDomain: "farmeasylogin.firebaseapp.com",
  projectId: "farmeasylogin",
  storageBucket: "farmeasylogin.appspot.com",
  messagingSenderId: "365039926080",
  appId: "1:365039926080:web:edb3eef3a7aeef725158a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const ProfilePic = result.user.photoURL;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("profilepic",ProfilePic)
    

    


  }).catch((error) => {
    console.log(error);
  });
};
