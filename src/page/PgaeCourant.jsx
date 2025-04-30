import { ArrowRight, Book, BookKey, Calendar, ChartArea, CheckIcon, DollarSignIcon, Dot, Facebook, Home, Linkedin, ListPlus, Mail, Phone, Send, Twitter, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Img1 from '../assets/img/fontTheque.png'
import Acceuille from '../composant/Acceuille';
import Accompagnement from '../composant/Accompagnement';
import Formation from '../composant/Formation';
import Digitheque from '../composant/Digitheque';
import Inscription from '../Modal/Inscription';
import Modalite from '../Modal/Modalite';
import Frais from '../Modal/Frais';
import PresentationAccompagnement from '../Modal/PresentationAccompagnement';

const PgaeCourant = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBlur, setBlur] = useState(false);
    const [openInscription, setOpenInscription] = useState(false);
    const [openModalite, setOpenModalite] = useState(false);
    const [openFrais, setOpenFrais] = useState(false);
    const [isScrolledBar, setIsScrolledBar] = useState(false);

    const slideMenu = () => {
        setIsScrolledBar(true);
    };
    const hideMenu = () => {
        setIsScrolledBar(false);
    };
    const closeTous = () => {
        setBlur(false)
        setOpenFrais(false)
        setOpenInscription(false)
        setOpenModalite(false)
    }

    const OpenInscription = () => {
        setBlur(true)
        setOpenInscription(true)
    }
    const OpenModalite = () => {
        setBlur(true)
        setOpenModalite(true)
    }
    const OpenFrais = () => {
        setBlur(true)
        setOpenFrais(true)
    }
    const OpenPres = () => {
        setBlur(true)
        // setOpenFrais(true)
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // 50px pour déclencher l'effet
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div>



            {/* header  */}

            <header className="fixed top-0 left-0 w-full z-50 h-[2rem] bg-white">
                {/* Div Email & Facebook */}
                <div
                    className={`transition-transform duration-300 sectionUnHeader text-white flex items-center justify-between space-x-3 ${isScrolled ? "-translate-y-full" : "translate-y-0"
                        } text-start px-4 sm:px-[6rem] py-2 bg-gradient-to-r from-bleuRoi to-bleuRoiFonce`}
                >
                    <div className="flex items-center justify-start space-x-3">
                        <div className="items-center space-x-2 flex">
                            <Phone width={18} />
                            <p className=" text-[15px] font-bold">034 08 904 62</p>
                        </div>

                        <div className="">
                            <p>|</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Mail width={18} />
                            <p className=" text-[15px] font-bold">digithèque56@gmail.com</p>
                        </div>
                    </div>


                </div>

                {/* Div Logo & Liens */}
                <div
                    className={`bg-white px-6 sm:px-[6rem] relative flex justify-between items-center w-full transition-all duration-300
          ${isScrolled
                            ? "-translate-y-10 pb-5 pt-3 shadow-xl"
                            : "sticky top-0 py-2"
                        }
          `}
                >
                    <div className="font-bold text-[20px] ">
                        <span className="text-bleuRoi">LOGO</span>
                    </div>

                    <div className="items-center space-x-8 nav lg:flex hidden">
                        <a href="#accueille" className="text-[17px]">
                            Accueille
                        </a>
                        <a href="#accompagnement" className=" text-[17px]">
                            Accompagnements
                        </a>
                        <a href="#formation" className=" text-[17px]">
                            Formations
                        </a>
                        <a href="#digitheque" className=" text-[17px]">
                            Digithèques
                        </a>
                    </div>

                    <div
                        className={`
                 ${isScrolled ? "top-[4rem]" : "top-[6rem]"}
                nav bg-white text-gris flex lg:hidden flex-col space-y-6 pb-4 px-8 shadow-xl
                 items-start justify-start w-full fixed sm:px-[6rem] left-0 -mt-1
                 ${isScrolledBar ? "h-auto" : "hidden"}
            `}
                    >
                        <a href="#accueille" className={` ${isScrolledBar ? "block" : "hidden"}`}>
                            Accueille
                        </a>
                        <a href="#accompagnement" className={` ${isScrolledBar ? "block" : "hidden"}`}>
                            Accompagnements
                        </a>
                        <a href="#formation" className={` ${isScrolledBar ? "block" : "hidden"}`}>
                            Formations
                        </a>
                        <a href="#digitheque" className={` ${isScrolledBar ? "block" : "hidden"}`}>
                            Digithèques
                        </a>

                        <button className={` ${isScrolledBar ? "block" : "hidden"} border-[3px] border-bleuRoi rounded-lg bg-gradient-to-r from-bleuRoi to-bleuRoiFonce text-white px-4 py-1 `}>
                            <p>Actualités</p>
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="border-[3px] rounded-lg bg-gradient-to-r from-bleuRoi to-bleuRoiFonce border-bleuRoi text-white px-4 py-1 hidden sm:block">
                            <p>Actualités</p>
                        </button>
                        {isScrolledBar ? (
                            <button onClick={hideMenu} className="block lg:hidden">
                                <X className="text-black" size={40} />
                            </button>
                        ) : (
                            <button onClick={slideMenu} className="block lg:hidden">
                                <ListPlus className="text-black" size={40} />
                            </button>
                        )}
                    </div>
                </div>
            </header>


            {/* Acceuile  */}
            <div className='w-full h-[100vh]' id='accueille'>
                <Acceuille />
            </div>

            {/* Accompagnement  */}
            <div className='w-full sm:px-0 px-4 mt-16' id='accompagnement'>
                <Accompagnement
                    OpenInscription={OpenInscription}
                    OpenFrais={OpenFrais}
                    OpenModalite={OpenModalite}
                    OpenPress={OpenPres}

                />
            </div>


            {/* formation  */}

            <div className='w-full sm:mt-[8rem]' id='formation'>
                <Formation />
            </div>

            {/* Digithèque  */}

            <div className='w-full mt-16 sm:mt-[8rem]' id='digitheque'>
                <Digitheque />
            </div>






            {/* blur  */}
            <div
                onClick={closeTous}
                className={`cursor-pointer fixed top-0 left-0 z-10 w-full h-screen backdrop-blur-[2px] bg-[#00000081] ${isBlur ? 'block' : 'hidden'}`}></div>
            {/* Modal Inscription  */}
            <div className={`fixed z-20 top-1/2 lg:top-[55%] left-1/2 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem]
              bg-white rounded-2xl px-12 py-8 ${isBlur ? 'block' : 'hidden'} `}>

                {
                    openInscription ?
                        <Inscription />
                        : openModalite ?
                            <Modalite />
                            : openFrais ?
                                <Frais />
                                :
                                <PresentationAccompagnement />
                }

            </div>




            {/* footer  */}

            <div className='w-full relative overflow-hidden h-auto lg:h-[65vh] mt-[2rem] px-6 lg:px-[5rem] py-[4rem] lg:py-[10rem]'>
                <div className='rounded-full w-[250rem] h-[250rem] absolute top-0 -right-[50rem] -z-20 
                bg-gradient-to-r from-bleuRoiFonce via-[#034b65]'></div>
                <div className='rounded-full w-[250rem] h-[250rem] absolute top-[10%] -left-[70rem] -z-20
                bg-gradient-to-r from-[#034b6552] via-bleuRoiFonce'></div>

                <div className='w-full text-white mt-[8rem] lg:mt-0'>

                    <div className='grid lg:grid-cols-3'>

                        <div className=''>
                            <p className='text-[25px] font-bold my-4'>Contact</p>
                            <div className='flex items-center justify-start space-x-4 my-4'>
                                <Phone />
                                <p>038 05 557 25</p>
                            </div>

                            <div className='flex items-center justify-start space-x-4 my-4'>
                                <Mail />
                                <p>digitheque56@gmail.com</p>
                            </div>


                        </div>
                        <div className='lg:border-l-[3px] lg:border-[#ffffff6c]  lg:px-12 '>
                            <p className='text-[25px] font-bold my-4'>Lieu</p>
                            <div className=''>
                                <p>
                                    Cité des Professeurs Andrainjato,
                                    à 85m au nord de l'arrêt bus 48 route mahasoabe,
                                    à côté de la cours DI.ACT
                                </p>
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-[25px] font-bold my-4'>Contact Rapide</p>
                            <form action="">
                                <input type="email" className='tailwind-form my-2' placeholder='Votre email' />
                                <textarea
                                    placeholder='Votre contenus'
                                    className='tailwind-form my-2'
                                />

                                <button className='flex items-center justify-center space-x-4 bg-bleuRoiFonce text-white border border-white rounded-lg px-4 py-2'>
                                    <Send />
                                    <p>Envoyer</p>
                                </button>
                            </form>


                        </div>
                    </div>





                </div>
            </div>



        </div>
    )
}

export default PgaeCourant
