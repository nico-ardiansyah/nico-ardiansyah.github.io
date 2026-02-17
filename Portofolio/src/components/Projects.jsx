import { useState } from "react";
import "../../src/index.css";

import foto from "../assets/project/project1_1.png";
import foto2 from "../assets/project/project1_2.png";
import foto3 from "../assets/project/project1_3.png";

import foto4 from "../assets/project/project2_1.png";
import foto5 from "../assets/project/project2_2.png";
import foto6 from "../assets/project/project2_3.png";

import foto7 from "../assets/project/project3_1.png";
import foto8 from "../assets/project/project3_2.png";
import foto9 from "../assets/project/project3_3.png";



import { useNavigation } from "../GlobalContext/useNavigationContext";

const Projects = () => {
    const { setListProject, listProject } = useNavigation();
    const [active, setActive] = useState(false);


    const Project = ({ foto1, foto2, foto3, projectName, description, url }) => {
        return (
            <>
                <section className="w-screen flex flex-wrap items-center flex-col h-90 md:h-105 animate-fade-out">
                    <div className="rounded-2xl relative flex justify-center group w-80 h-49 md:w-150 md:h-85 shadow-[0px_0px_20px] shadow-black/40 overflow-hidden">
                        <a href={url} className="rounded-2xl transition-all duration-700 flex w-[300%] animate-slide">
                            <img src={foto1} alt="" className="w-full h-full rounded-2xl object-contain md:group-hover:blur-sm transition-all duration-700 p-1" />
                            <img src={foto2} alt="" className="w-full h-full rounded-2xl object-contain md:group-hover:blur-sm transition-all duration-700 p-1" />
                            <img src={foto3} alt="" className="w-full h-full rounded-2xl object-contain md:group-hover:blur-sm transition-all duration-700 p-1" />
                        </a>
                        <a href={url} className="absolute bottom-15">
                            <button className="p-1 opacity-0 rounded-md md:hover:bg-transparent font-semibold text-sm text-white border-2 border-myGreen md:group-hover:opacity-100 transition-all duration-700 delay-200 shadow-[0px_0px_10px] shadow-myGreen translate-y-4 md:group-hover:translate-y-0 bg-myGreen cursor-pointer md:p-2 md:text-lg md:bottom-20">
                                Github
                            </button>
                        </a>
                    </div>
                    <span className="text-myWhite font-bebas-neue font-bold text-2xl w-full text-center">{projectName}</span>
                    <span className="text-myWhite font-poppins text-center w-full px-2">{description}</span>
                </section>
            </>
        )
    };

    return (
        <>
            <div className="w-screen h-screen bg-transparent z-5 absolute flex flex-col mt-20 font-poppins md:items-center overflow-hidden animate-fade-out gap-3">
                <div className="w-screen text-4xl text-myGreen font-bold font-bebas-neue text-center md:text-5xl mb-10 md:mb-0">
                    Projets
                </div>

                {listProject === "satu" && <Project foto1={foto} foto2={foto2} foto3={foto3} projectName={"Sosial Media"} url={"https://github.com/nico-ardiansyah/SosialMediaProject"} description={"Sosial Media yang dimana user bisa membuat post, berkomentar, membalas komentar, follow user lain, dan interaksi lainnya"} />}

                {listProject === "dua" && <Project foto1={foto4} foto2={foto5} foto3={foto6} projectName={"Online Market Place"} url={"https://github.com/nico-ardiansyah/Belajar_Frontend_WebStore"} description={"Frontend toko online yang dikembangkan menggunakan tailwind css"} />}

                {listProject === "tiga" && <Project foto1={foto7} foto2={foto8} foto3={foto9} projectName={"Portofolio"} url={"https://github.com/nico-ardiansyah/nico-ardiansyah.github.io"} description={"Web Portofolio yang dikembangkan menggunakan React dan Tailwindcss"} />}

                <section className="w-screen flex items-center gap-3 justify-center">
                    <div className={`w-10 h-10 font-anton rounded-md flex justify-center items-center text-2xl text-white/80 border border-myGreen shadow-[0px_0px_10px] shadow-myGreen transition-all duration-700 cursor-pointer hover:bg-myGreen ${listProject === "satu" ? "bg-myGreen" : "bg-transparent"}`} onClick={() => setListProject("satu")}>
                        1
                    </div>
                    <div className="border border-white w-20"></div>
                    <div className={`w-10 h-10 font-anton rounded-md flex justify-center items-center text-2xl text-white/80 border border-myGreen shadow-[0px_0px_10px] shadow-myGreen transition-all duration-700 cursor-pointer hover:bg-myGreen ${listProject === "dua" ? "bg-myGreen" : "bg-transparent"}`} onClick={() => setListProject("dua")}>
                        2
                    </div>
                    <div className="border border-white w-20"></div>
                    <div className={`w-10 h-10 font-anton rounded-md flex justify-center items-center text-2xl text-white/80 border border-myGreen shadow-[0px_0px_10px] shadow-myGreen transition-all duration-700 cursor-pointer hover:bg-myGreen ${listProject === "tiga" ? "bg-myGreen" : "bg-transparent"}`} onClick={() => setListProject("tiga")}>
                        3
                    </div>
                </section>
            </div>
        </>
    )
};


export default Projects;