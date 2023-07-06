import { useEffect, useRef, useState } from "react";
import logo from "/personal-logo.svg";
import profilePic from "/little-profile.jpg";
import { AddressBook, Briefcase, IconContext, ReadCvLogo, User } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <IconContext.Provider
            value={{
                size: 30,
                weight: "light",
                mirrored: false,
            }}
        >
            <header> {/* sticky */}
                <div className="navbar my-0 mx-auto max-w-[60%] bg-transparent">
                    <div className="navbar-start">
                        <button className="btn btn-square btn-ghost" onClick={() => {navigate("/")}}>
                            <img src={logo} alt="Logo" className="h-[3rem] w-[3rem] p-0" />
                        </button>
                        <h1 className="font-extrabold text-xl text-transparent pl-4 bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500" >
                            { window.location.pathname.slice(1).replace(/\b(\w)/g, (match) => match.toUpperCase()) }
                        </h1>
                    </div>
                    <div className="navbar-end">
                        <div className="grid grid-flow-col gap-8">
                            <Link to="/about">
                                <User />
                            </Link>
                            <Link to="/resume">
                                <ReadCvLogo />
                            </Link>
                            <Link to="/portfolio">
                                <Briefcase />
                            </Link>
                            <Link to="/contact">
                                <AddressBook />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </IconContext.Provider>
    )
}