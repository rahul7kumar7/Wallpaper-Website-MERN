import {Link} from 'react-router-dom';
import { FaUpload } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


export default function Header(){
    return (
        <nav className="bg-[#222] text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center gap-6">
                        <Link to="/">
                            <p className="text-xl text-[#757f83] font-bold hover:text-white cursor-pointer">Wallpaper Wish</p>
                        </Link>
                    </div>
                </div>
            </div>

        </nav>

    )
}