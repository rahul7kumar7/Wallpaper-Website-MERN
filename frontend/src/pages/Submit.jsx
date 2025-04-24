import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Submit() {
    const [formData, setFormData] = useState({
        title: '',
        altTitle: '',
        category: '',
        tags: '',
        img: null,
    });

    const [selectedImg, setSelectedImg] = useState(null);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle file selection
    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, img: e.target.files[0] }));
        setSelectedImg(URL.createObjectURL(e.target.files[0]));
    };

    // Handle text input changes
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    // Handle category selection
    const handleCategoryChange = (e) => {
        setFormData(prev => ({ ...prev, category: e.target.value }));
    };

    // Submit form
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Submit button clicked');
        setLoading(true)

        if (!formData.img) {
            alert("Please select an image to upload.")
            setLoading(false)
            setError("Enter an image file to proceed")
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("altTitle", formData.altTitle);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("tags", formData.tags);

        try {
            const res = await fetch('/app/wallpaper/upload', {
                method: 'POST',
                body: formDataToSend
            });
            const data = await res.json();
            console.log("Upload Success:", data);
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            setError('Error occurred while uploading wallpaper:', error)
            console.error('Error occurred while uploading wallpaper:', error);
        }
    }

    return (
        <div className='max-w-lg mx-auto p-5'>
            <form className="flex flex-col my-5 mx-5 gap-3" onSubmit={handleSubmit}>
                <h1 className='font-bold text-2xl capitalize'>Select an image file to upload (supported: .jpg, .png, .webp):</h1>
                <input type="file" id="img" className="border p-2" onChange={handleFileChange} accept="image/*" required />

                {formData.img && (
                    <div className="flex flex-col gap-2">
                <img src={selectedImg} alt="" className='hover:opacity-90 cursor-crosshair' />

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" className="text-white border p-2 rounded-sm" onChange={handleChange} required />

                <label htmlFor="altTitle">Alt-Title:</label>
                <input type="text" id="altTitle" className="text-white border p-2 rounded-sm" onChange={handleChange} required />

                <label htmlFor="category">Category:</label>
                <select id="category" onChange={handleCategoryChange} className="text-white border p-2 rounded-sm">
                    <option value="" className='text-black'>Select Category</option>
                    <option value="Abstract" className='text-black'>Abstract</option>
                    <option value="Animals" className='text-black'>Animals</option>
                    <option value="Anime" className='text-black'>Anime</option>
                    <option value="Architecture" className='text-black'>Architecture</option>
                    <option value="Bikes" className='text-black'>Bikes</option>
                    <option value="Black/Dark" className='text-black'>Black/Dark</option>
                    <option value="Cars" className='text-black'>Cars</option>
                    <option value="Cute" className='text-black'>Cute</option>
                    <option value="Fantasy" className='text-black'>Fantasy</option>
                    <option value="Flowers" className='text-black'>Flowers</option>
                    <option value="Food" className='text-black'>Food</option>
                    <option value="Games" className='text-black'>Games</option>
                    <option value="Gradients" className='text-black'>Gradients</option>
                    <option value="CGI" className='text-black'>CGI</option>
                    <option value="Lifestyle" className='text-black'>Lifestyle</option>
                    <option value="Love" className='text-black'>Love</option>
                    <option value="Military" className='text-black'>Military</option>
                    <option value="Minimal" className='text-black'>Minimal</option>
                    <option value="Movies" className='text-black'>Movies</option>
                    <option value="Music" className='text-black'>Music</option>
                    <option value="Nature" className='text-black'>Nature</option>
                    <option value="People" className='text-black'>People</option>
                    <option value="Photography" className='text-black'>Photography</option>
                    <option value="Quotes" className='text-black'>Quotes</option>
                    <option value="Sci-Fi" className='text-black'>Sci-Fi</option>
                    <option value="Space" className='text-black'>Space</option>
                    <option value="Sports" className='text-black'>Sports</option>
                    <option value="Technology" className='text-black'>Technology</option>
                    <option value="World" className='text-black'>World</option>
                </select>

                <label htmlFor="tags">Tags (separated by commas):</label>
                <input type="text" id="tags" onChange={handleChange} className="text-white border p-2 rounded-sm" />
                
                <button className='bg-[#71b4c7] p-3 rounded-sm cursor-pointer uppercase font-semibold hover:opacity-90 border-1' type="submit">{loading ? "Uploading Wallpaper...." : "Upload Wallpaper"}</button>
                </div>
                )}


                {error && <p>{error}</p>}
            </form>
        </div>
    );
}