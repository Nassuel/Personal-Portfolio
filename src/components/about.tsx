export default function About() {
    return (
        <div className="grid grid-cols-3 place-items-center gap-4 h-full max-w-[60%] my-auto mx-auto bg-transparent">
            <div className="place-self-start">
                <h1 className="font-extralight">Hello, my name is</h1>
            </div>
            <div className="">
                {/* <img
                    src="/better-profile-pic.jpg"
                    alt="profile"
                    className=" w-[40rem] rounded-md transform hover:scale-150"
                /> */}
                <h1 className="font-extrabold text-8xl text-transparent text-center bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-500"> {/* bg-clip-text bg-[url('lake-washington-kenmore.JPG')] pb-4 animate-bounce */}
                    Nassuel Valera Cuevas
                </h1>
            </div>
            <div className="text-center place-self-end w-3/4">
                Previously at
                <a href="https://www.t-mobile.com" target="_blank">
                    <span className="text-transparent bg-clip-text bg-pink-700 hover:bg-pink-400">
                        T-Mobile
                    </span>
                </a>. I'm a
                <h1 className="text-center text-2xl my-1 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">Software Engineer</h1>
                And looking for my next opportunity!
            </div>
        </div>
    );
}