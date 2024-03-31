import { createContext,useContext,useEffect,useState } from "react";
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user,setUser] = useState({})

    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
        setDoc(doc(db,'users',email),{
            savedShows:[]
        })
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = ()=>{
    return useContext(AuthContext)
}