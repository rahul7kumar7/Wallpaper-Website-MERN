import { Link } from 'react-router-dom'

export default function WallpaperItem({wallpaper}) {
  return (
    <div className ="flex flex-col gap-2 w-[327px] h-[225px] justify-center">
      <div className='object-center w-[307px] h-[173px] hover:scale-105 transition-scale overflow-hidden duration-300 ease-in-out self-center'>
      {wallpaper.width === 1920 && wallpaper.height === 1080 && (
          <span className='absolute bg-[#3e5749] text-white p-1 text-xs uppercase'>Full HD</span>
      )}
      {wallpaper.width === 3840 && wallpaper.height === 2160 && (
          <span className='absolute bg-[#3e5749] text-white p-1 text-xs uppercase'>4K</span>
      )}
      <Link to={`/wallpaper/${wallpaper._id}`} >
            <img className="h-full  w-full object-cover" key={wallpaper._id} src={wallpaper.img} alt={wallpaper.altTitle} />
        </Link>
      </div>
      </div>
  )
}
