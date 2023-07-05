import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    const REDIRECTSECONDS = 3;

    useEffect(() => {
        setTimeout(() => {
            navigate("/about");
        }, REDIRECTSECONDS * 1000);
    }, []);
    return (
        <div className="hero h-full max-w-[60%] my-auto mx-auto bg-transparent">
            <div className="hero-overlay bg-transparent"></div>
            <div className="hero-content flex-col">
                <h1 className="animate-bounce font-extrabold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-r to-emerald-500 from-10% via-sky-500 via-30% from-indigo-500 to-90%"> {/* bg-clip-text bg-[url('lake-washington-kenmore.JPG')] pb-4 animate-bounce */}
                    Welcome!
                </h1>
                <img
                    src="/better-profile-pic.jpg"
                    alt="profile"
                    className=" w-[40rem] rounded-md transform hover:scale-150 bg-clip-content"
                />
                <h1 className="text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r to-emerald-500 from-10% via-sky-500 via-30% from-indigo-500 to-90%">
                    Redirecting you to <span className="font-extrabold">About</span> in <CountdownTimer seconds={REDIRECTSECONDS} />!
                </h1>
            </div>
        </div>
    );
}

const CountdownTimer = ({ seconds }: { seconds: number }) => {
    const [countdown, setCountdown] = useState<number>(seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds, countdown]);

    return (
        <>{countdown}</>
    );
}