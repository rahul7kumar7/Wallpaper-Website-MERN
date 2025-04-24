import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import OAuth from '../pages/Components/OAuth.jsx'
import {useDispatch, useSelector} from "react-redux";
import {loginStart, loginSuccess, loginFailure} from "../redux/user/userSlice.js";

export default function Signin(){

    const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const {loading, error} = useSelector((state)=> state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.id]:event.target.value
        })
        console.log(formData);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(loginStart());
            const res = await fetch('/app/auth/login', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
            if(data.success === false){
                dispatch(loginFailure(data.message));
                console.log(data.message);
                return;
            }
            dispatch(loginSuccess(data));
            console.log(data);
            navigate('/');

        } catch(error){
            console.log(error);
            dispatch(loginFailure(error.message));

        }

    }

    return (
        <div className="p-3 mx-auto max-w-xl flex flex-col gap-5">
            <h3 className="text-4xl font-bold uppercase">Login to your Wallpaper Wish Account</h3>

            <div className="border-1 p-5 bg-[#242527] rounded-sm ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        Email:
                        <input type="email" id="email" className="border p-3 rounded-sm"
                               onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        Password:
                        <input type="password" className="border p-3 rounded-sm" id="password" onChange={handleChange}/>
                    </div>
                    <button
                        className="bg-cyan-600 p-3 rounded-sm uppercase text-white font-semibold cursor-pointer">{loading ? 'loading....' : 'Login to your Account'}</button>
                    <OAuth />
                    {error && <span className="text-red-400">{error}</span>}
                </form>

            </div>
            <hr/>
            <div className="flex gap-1">
                Don't have an account?
                <Link to="/signup" className="underline text-blue-500"> Register </Link>
            </div>


        </div>
    )
}