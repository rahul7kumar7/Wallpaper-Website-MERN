import {useState} from "react";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';
import {app} from '../../firebase.js';

export default function OAuth(){

    const [loading, setLoading] = useState(false);
    async function handleLogin(){
        setLoading(true);
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result =  await signInWithPopup(auth, provider);
            console.log(result);
        } catch(error){
            console.log(error);
        }
    }

    return (
        <button
            className="bg-[#f03f35] p-3 rounded-sm uppercase text-white font-semibold cursor-pointer" onClick={handleLogin}>{loading ? 'loading....' : 'Login through Google'}</button>
    )
}