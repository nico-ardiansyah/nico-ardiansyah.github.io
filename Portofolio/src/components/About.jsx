import "../../src/index.css";
import foto from "../assets/foto2.png";

const About = () => { 
    return (
        <>
            <section className="w-screen h-screen bg-transparent z-5 absolute flex flex-col md:flex-row mt-15 font-poppins md:justify-center md:items-center animate-fade-out">
                <div className="w-screen h-1/3 flex items-center justify-center relative md:w-1/3">
                    <div className="w-50 h-50 bg-myGreen rounded-full shadow-[0px_0px_50px] shadow-myGreen md:shadow-none blur-md animate-blob md:w-90 md:h-90"></div>
                    <div className="w-50 h-50 absolute border border-white rounded-full animate-blob md:w-80 md:h-80">
                        <img src={ foto } alt="" className="object-cover object-top w-full h-full rounded-full"/>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 md:gap-5">
                    <div className=" pl-5 flex flex-col gap-2">
                        <h1 className="text-3xl font-bold font-bebas-neue text-myGreen md:text-5xl">About Me</h1>
                        <span className="text-md text-white whitespace-normal breaks-words">
                            Seorang web developer yang berfokus pada pengembangan aplikasi web yang fungsional, efisien, dan mudah digunakan. Saya memiliki ketertarikan pada pengembangan frontend dan backend, dengan fokus utama pada backend karena menyukai pola pikir algoritmis yang terstruktur dan logis. Jika memiliki ketertarikan yang sama, let's connect!
                        </span>
                    </div>
                    <div className="flex flex-col pl-5 md:gap-3">
                        <h1 className="text-myGreen text-lg font-semibold">Skills</h1>
                        <div className="flex gap-2 flex-wrap">
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                Javascript
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                Tailwind css
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                React
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                Node JS
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                Express JS
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                MongoDB
                            </div>
                            <div className="p-1 bg-myGreen rounded-md text-white hover:bg-transparent hover:ring-2 ring-white hover:text-myGreen transition-all duration-700">
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;
