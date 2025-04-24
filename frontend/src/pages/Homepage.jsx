export default function Home()
{
    return (
        <div className="container p-4">
            <div><a href="/signup" className="hover:underline hover:text-blue-500">Register</a></div>
            <div><a href="/signin" className="hover:underline hover:text-blue-500">SignIn</a></div>
            <div><a href="/submit" className="hover:underline hover:text-blue-500">Submit</a></div>
            <div><a href="/profile" className="hover:underline hover:text-blue-500">Profile</a></div>
        </div>
    )
}
