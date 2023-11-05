import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { PropTypes } from "prop-types";
import auth from "../Config/firebase.config";



export const AuthContext = createContext(null);

const Auth = auth;


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);


    const googleProvider = new GoogleAuthProvider();
    const googlePopUp = () => {
        setLoader(false)
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const githubPopUp = () => {
        setLoader(false)
        return signInWithPopup(auth, githubProvider)
    }

    const createUserWithEmail = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const login = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(false);
        return signOut(auth)
    }

    const uploadProfile = (name, photo) => {
        setLoader(false)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(true);
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const information = { user, createUserWithEmail, logOut, login, loader, uploadProfile, googlePopUp, githubPopUp }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}