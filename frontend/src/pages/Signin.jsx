import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Signin(){

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.id]:event.target.value
        })
        console.log(formData);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
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
                setError(data.message);
                setLoading(false);
                console.log(data.message);
                return;
            }
            setLoading(false);
            setFormData(null)
            console.log(data);
            navigate('/');

        } catch(error){
            console.log(error);
            setError(error.message);
            setLoading(false)
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
                    <button
                        className="bg-[#f03f35] p-3 rounded-sm uppercase text-white font-semibold cursor-pointer">{loading ? 'loading....' : 'Login through Google'}</button>
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