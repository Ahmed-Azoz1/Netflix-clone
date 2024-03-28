

const Navbar = () => {
    return (
        <header className="flex items-center justify-between p-4 z-50 w-full absolute">
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
            <div>
                <button className="pr-4 cursor-pointer text-white">Sign In</button>
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
            </div>
        </header>
    )
}

export default Navbar