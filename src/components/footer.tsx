import logo from "/personal-logo.png";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import daisyLogo from "/daisy.svg";
import bentoLogo from "/bento.svg";
import { GithubLogo, IconContext, InstagramLogo, LinkedinLogo, PhosphorLogo, SquareHalfBottom } from "@phosphor-icons/react";


export default function Footer() {
    return (
        <footer className="footer max-w-[60%] h-16 my-0 mx-auto px-10 bg-transparent place-self-end">
            <IconContext.Provider
                value={{
                    size: 30,
                    weight: "regular",
                    mirrored: false,
                }}
            >
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center gap-1">
                        <p>© Nassuel Valera Cuevas</p>
                        {/* <a>
                            <img src={reactLogo} className="w-4" />
                        </a>
                        <a>
                            <img src={viteLogo} className="w-4" />
                        </a>
                        <a>
                            <img src={daisyLogo} className="w-20" />
                        </a>
                        <a
                            className="rounded"
                            href="https://phosphoricons.com/"
                            target="_blank"
                        >
                            <PhosphorLogo weight="bold" />
                        </a> */}
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <a
                            href="https://www.instagram.com/godspeed.pictura/"
                            target="_blank"
                        >
                            <InstagramLogo />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nassuelvc/"
                            target="_blank"
                        >
                            <LinkedinLogo />
                        </a>
                        <a
                            href="https://github.com/Nassuel"
                            target="_blank"
                        >
                            <GithubLogo />
                        </a>
                        <a
                            href="https://bento.me/nassuel"
                            target="_blank"
                        >
                            <SquareHalfBottom />
                        </a>
                    </div>
                </div>
            </IconContext.Provider>
        </footer>
    );
}