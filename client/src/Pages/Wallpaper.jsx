import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResizeComponent from './Components/ResizeComponent.jsx';

export default function Wallpaper() {
    const [wallpaper, setWallpaper] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(null);

    const params = useParams();
    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/app/wallpaper/get/${params.wallpaperId}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                console.log('wallpaper data is', data)
                setWallpaper(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchListing();
    }, [params.wallpaperId]);

    return (
      <div className='max-w-3xl mx-auto p-5'>
        {loading && <p>Loading...</p>}
        {wallpaper &&  (
        <div className='flex flex-col gap-5 border-1'>
            <h1 className='font-semibold text-4xl border-1'> <span className='text-[#c7a6bd] border-1'>{wallpaper.category}</span> // {wallpaper.title}</h1>
            <img src={wallpaper.img} alt="" className='rounded-sm border-1'/>
            {wallpaper.width && wallpaper.height &&(
            <div>
              <span>Image Dimensions:</span> <span className="bg-[#c9b1a8] p-2">{wallpaper.width} x {wallpaper.height}</span>
            </div>
            )}
            <a className='border-1 w-[50%] p-3 uppercase rounded-sm bg-[#3e5749] text-white font-semibold text-center hover:opacity-95 border-emerald-950 border-1 ' href={wallpaper.img} target='_blank'  >
                Download Wallpaper
            </a>

            {wallpaper.width && wallpaper.height && (
                <ResizeComponent width={wallpaper.width} height={wallpaper.height} url={wallpaper.img} />
            )}

            {/* resize 4k for mobile
    https://res.cloudinary.com/dg01gwwoc/image/upload/c_fill,w_2160,h_3840/v1739183549/wallpaper/Broken%20Anime%20Android%20Girl.jpg
    c_fill,w_2160,h_3840
    documentation: https://cloudinary.com/documentation/resizing_and_cropping#:~:text=When%20changing%20the%20dimensions%20of%20an%20uploaded%20image,c%20%28crop%2Fresize%29%20parameter%20for%20selecting%20the%20crop%2Fresize%20mode.
    //  */}

        </div>
        )}
        {error && <p>{error}</p>}
      </div>
    );
}