import "../index.css";
import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaWhatsapp, FaTelegram, FaRocketchat, FaGithub } from "react-icons/fa";

const Contact = () => {

    return (
        <>
            <div className="w-screen h-screen bg-transparent z-5 absolute flex flex-col mt-20 font-poppins items-center overflow-hidden animate-fade-out gap-5 md:mt-25">
                <div className="w-screen text-4xl text-myGreen font-bold font-bebas-neue text-center md:text-5xl">
                    Contact Me
                </div>
                <div className="w-screen font-bold font-poppins text-center text-myWhite">
                    Silahkan hubungi saya jika ingin kenal lebih lanjut melalui contact person dibawah ini: 
                </div>
                <section className="flex-row justify-center flex">
                    <div className="gap-8 flex w-full text-white flex-col">
                        <div className="flex gap-3 items-center">
                            <a href="https://github.com/nico-ardiansyah"><FaGithub className="w-10 h-10 text-myGreen cursor-pointer" /></a> 
                            <span className="text-lg">https://github.com/nico-ardiansyah</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <a href="mailto:nic0.ardiansy4h@gmail.com"><EnvelopeIcon className="w-10 h-10 text-myGreen cursor-pointer" /></a>
                            <span className="text-lg">nic0.ardiansy4h@gmail.com</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <a href="tel:+6289525797654"><DevicePhoneMobileIcon className="w-10 h-10 text-myGreen cursor-pointer" /></a>
                            <span className="text-lg">+62 895 2579 7654</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <a href="https://wa.me/6289525797654"><FaWhatsapp className="w-10 h-10 text-myGreen cursor-pointer" /></a>
                            <span className="text-lg">+62 895 2579 7654</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <a href="https://t.me/nicoardiansyahh"><FaTelegram className="w-10 h-10 text-myGreen cursor-pointer" /></a>
                            <span className="text-lg">@nicoardiansyahh</span>
                        </div>
                    </div>
                </section> 
            </div>
        </>
    )
};

export default Contact;
