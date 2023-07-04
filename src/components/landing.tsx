export default function Landing() {
    return (
        <div className="hero h-full max-w-[60%] my-auto mx-auto bg-transparent">
            <div className="hero-overlay bg-transparent">
                <h1 className="font-extrabold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 animate-bounce"> {/* bg-clip-text bg-[url('lake-washington-kenmore.JPG')] pb-4 animate-bounce */}
                    Welcome!
                </h1>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/better-profile-pic.jpg"
                    alt="profile"
                    className=" w-[40rem] rounded-md transform hover:scale-125 bg-clip-content"
                />
            </div>
        </div>
    );
}