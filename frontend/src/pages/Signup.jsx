import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { GiDiceTarget } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";



export default function Signup(){
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [noData, setNoData] = useState({
        username: false,
        email: false,
        password: false,
    });

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.id]:event.target.value
    })
        console.log(formData);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!formData.username) {
                setNoData({
                    username: true,
                })
            }
            if (!formData.email) {
                setNoData({
                    email: true,
                })
            }
                if (!formData.password) {
                    setNoData({
                        password: true,
                    })
                }

            console.log(formData);
            setLoading(true);
            // const res = await fetch('/app/auth/register', {
            //     method: 'POST',
            //     headers: {
            //         "content-type": "application/json",
            //     },
            //     body: JSON.stringify(formData)
            // });
            // const data = await res.json();
            const data = 'something'
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
            navigate("/signin");
        console.log(noData)
        }
        catch(error){
            console.log(error);
            setError(error.message);
            setLoading(false)
        }

    }

    const navigateSingin = () => {
        navigate("/signin");
    }

    return (
        <div className="p-3 ">
            {/*{noData && (*/}
            {/*    <div className="bg-amber-800 p-3 my-1 flex justify-between items-center">*/}
            {/*        <p>Please enter email</p>*/}
            {/*        <a href="#"><IoCloseCircle/></a>*/}
            {/*    </div>*/}
            {/*)}*/}




            <h3 className="text-5xl mx-auto max-w-2xl font-bold uppercase">Discover Images and Artists</h3>
            <br/>
            <br/>
            <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
                <div className="flex flex-col flex-wrap">
                    <img className="object-contain"
                         src="https://res.cloudinary.com/dg01gwwoc/image/upload/h_350/v1737992851/Cute-Anime-Girl-PNG-Free-Download_q9jlxx.png"
                         alt=""/>
                    <ul className="flex flex-col text-2xl gap-4">
                        <li className="flex gap-1 items-center">
                            <FaStar/> Favorite and track artists, characters, and more.
                        </li>
                        <li className="flex gap-1 items-center">
                            <HiCurrencyRupee/>Earn commission or get ad-revenue for original arts.
                        </li>
                        <li className="flex gap-1 items-center">
                            <GiDiceTarget/> Discover amazing new images daily
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="shadow-2xs text-3xl">Register</h2>
                    <button onClick={navigateSingin}
                            className="cursor-pointer border-1 max-w-38 text-xs font-semibold p-2 bg-[#242527]">
                        Need to Login Instead?
                    </button>
                    <form onSubmit={handleSubmit} className="border-1 p-5 bg-[#242527] rounded-sm">
                        <div className="flex flex-col gap-2">
                            Username:
                            <input
                                type="text"
                                id="username"
                                className="border p-1 rounded-sm w-[430px]
                               bg-[#2b2a2f]"
                                onChange={handleChange}
                            />
                            Email:
                            <input type="email" id="email" className="border p-1 rounded-sm w-[430px]
                               bg-[#2b2a2f]"
                                   onChange={handleChange}/>
                            Password:
                            <input type="password" className="border p-1 rounded-sm w-[430px]
                               bg-[#2b2a2f]" onChange={handleChange}/>
                            <button
                                className="bg-cyan-600 p-3 rounded-sm uppercase text-white font-semibold cursor-pointer">{loading ? 'loading....' : 'Register your Account'}</button>
                            <button
                                className="bg-[#f03f35] p-3 rounded-sm uppercase text-white font-semibold cursor-pointer">{loading ? 'loading....' : 'Register through Google'}</button>
                            {error && <span className="text-red-400">{error}</span>}
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}