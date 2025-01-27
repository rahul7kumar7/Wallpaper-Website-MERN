import {useState} from 'react'


export default function Home()
{
    const [fileName, setFileName] = useState('')
    const [uploadError, setUploadError] = useState(false)
    const handleChange = (e) => {
        const file = e.target.files[0]
        setFileName(file.name)
        console.log(file)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setUploadError(false);
            const res = await fetch(``)
        } catch (error){
            console.log(error)
            setUploadError(true);
        }
    }
    return (
            <div className="flex flex-col gap-6">
                <h1 className="text-slate-700 font-bold text-3xl lg:text-5xl">Wallpaper<span className="text-cyan-900">Wish</span></h1>
                <div>
                    <h3>Upload Images</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="file" className="border-2 text-cyan-500"
                        onChange={handleChange}/>
                    </form>
                </div>
            </div>
    )
}
