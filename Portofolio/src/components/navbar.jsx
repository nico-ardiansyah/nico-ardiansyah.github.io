import { useState } from "react";
import "../../src/index.css";
import { useNavigation } from "../GlobalContext/useNavigationContext";


const Navbar = () => {
    const { nav, setNav } = useNavigation();

    return (
        <>
            <nav className="w-screen h-10 absolute flex text-white mt-4 font-poppins font-semibold bg-transparent z-10">
                <div className="w-1/3 h-full font-semibold text-[20px] hidden md:flex justify-center items-center">
                    <h1>Nico Ardiansyah</h1>
                </div>
                <section className="flex-1 flex content-center justify-around text-shadow-[0px_0px_1px] text-shadow-white transition-all px-4">
                    <div className="w-15 h-full content-center">
                        <button className={`content-center cursor-pointer py-1 px-2 ${nav == "Home" ? "rounded-lg bg-myGreen duration-700 shadow-[0px_0px_10px] shadow-white/30" : ''}`} onClick={() => setNav("Home")}>
                            Home
                        </button>
                    </div>
                    <div className="w-15 h-full content-center">
                        <button className={`content-center cursor-pointer py-1 px-2 ${nav == "About" ? "rounded-lg bg-myGreen duration-700 shadow-[0px_0px_10px] shadow-white/30" : ''}`} onClick={() => setNav("About")}>
                            About
                        </button>
                    </div>
                    <div className="w-15 h-full content-center">
                        <button className={`content-center cursor-pointer py-1 px-2 ${nav == "Projects" ? "rounded-lg bg-myGreen duration-700 shadow-[0px_0px_10px] shadow-white/30" : ''}`} onClick={() => setNav("Projects")}>
                            Projects
                        </button>
                    </div>
                    <div className="w-15 h-full content-center">
                        <button className={`content-center cursor-pointer py-1 px-2 ${nav == "Contact" ? "rounded-lg bg-myGreen duration-700 shadow-[0px_0px_10px] shadow-white/30" : ''}`} onClick={() => setNav("Contact")}>
                            Contact
                        </button>
                    </div>
                </section>
            </nav>
        </>
    )
};

export default Navbar;