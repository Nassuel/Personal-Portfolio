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
                <h1 className="font-extrabold text-8xl text-transparent text-center bg-clip-text bg-gradient-to-r to-emerald-500 from-10% via-sky-500 via-30% from-indigo-500 to-90%"> {/* bg-clip-text bg-[url('lake-washington-kenmore.JPG')] pb-4 animate-bounce */}
                    Nassuel Valera Cuevas
                </h1>
            </div>
            <div className="place-self-end w-3/4">
                Previously at T-Mobile. I'm a Software Engineer! And looking for my next opportunity.
            </div>
        </div>
    );
}