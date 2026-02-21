import "../../src/index.css";
import foto from "../assets/foto.png";

import { EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="w-screen h-screen bg-transparent z-5 absolute flex flex-col md:flex-row mt-15 font-poppins md:justify-center md:items-center overflow-hidden animate-fade-out">
                <div className="w-screen h-1/2 flex justify-center items-center md:w-1/3 md:order-2 order-1">
                    <div className="w-70 h-70 rounded-full bg-myGreen p-2 shadow-[0px_0px_15px] shadow-myGreen md:w-80 md:h-80">
                        <img src={foto} alt="" className="w-full h-full rounded-full object-top object-cover bg-white" />
                    </div>
                </div>
                <div className=" flex flex-col gap-3 ml-5 md:w-[40%] md:order-3 order-2">
                    <div className="font-semibold text-md md:text-lg">
                        <span className="text-white">Hi, Saya <span className="text-myGreen">Web Developer</span></span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-4xl text-myGreen font-bold font-anton md:text-6xl">Nico Ardiansyah</h1>
                    </div>
                    <div className="text-white text-sm md:text-lg">
                        <span>Saya Nico Ardiansyah, lulusan jurusan Teknik Informatika yang menyukai bidang web development, yuk kenalan !!</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1HTzZUfnXP0mOfLn6pYp9EO-ETGjqG8r-/view?usp=drive_link" className="p-2 rounded-md border-2 border-myGreen bg-myGreen text-myBlack w-50 font-semibold shadow-[0px_0px_10px] shadow-myGreen hover:bg-transparent hover:text-myWhite transition-all duration-500 text-center">
                        Download CV
                    </a>
                </div>
                <div className="md:flex justify-center w-[90%] gap-8 self-center mt-10 md:order-1 md:flex-col md:w-[10%] order-3 hidden">
                    <a href="https://github.com/nico-ardiansyah"><FaGithub className="w-10 h-10 text-myGreen cursor-pointer hover:text-white hover:scale-105 transition-all duration-500" /></a>
                    <a href="mailto:nic0.ardiansy4h@gmail.com"> <EnvelopeIcon className="w-10 h-10 text-myGreen cursor-pointer hover:text-white hover:scale-105 transition-all duration-500" /> </a>
                    <a href="https://wa.me/6289525797654"> <FaWhatsapp className="w-10 h-10 text-myGreen cursor-pointer hover:text-white hover:scale-105 transition-all duration-500" /> </a>
                    <a href="tel:+6289525797654"><DevicePhoneMobileIcon className="w-10 h-10 text-myGreen cursor-pointer hover:text-white hover:scale-105 transition-all duration-500" /></a>
                    <a href="https://t.me/nicoardiansyahh"><FaTelegram className="w-10 h-10 text-myGreen cursor-pointer hover:text-white hover:scale-105 transition-all duration-500" /></a>
                </div>
                
            </div>
        </>
    )
};

export default Home;
