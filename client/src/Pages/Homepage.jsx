import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import WallpaperItem from './Components/WallpaperItem.jsx'

export default function Home()
{
    const [wallpapers, setWallpapers] = useState([])

    useEffect(() => {
            const fetchWallpapers = async () => {
                try {
                    const res = await fetch(`/app/wallpaper/get`, {
                        method: 'GET'
                    });
                    const data = await res.json();
                    setWallpapers(data);
                    console.log(wallpapers);

                } catch (error){
                    console.log(error);
                }
            }
            fetchWallpapers();
    }, [])

    return (
            <div className="container mx-auto p-4">
                <div className='grid  grid-cols-2 md:grid-cols-4 gap-4'>
                    {wallpapers && wallpapers.length > 0 &&(
                        wallpapers.map((wallpaper, index) => (
                            <div key={index}>
                                <WallpaperItem wallpaper={wallpaper} key={wallpaper._id} />
                            </div> 
                        ))
                    )}
                 </div>
            </div>
    )
}
