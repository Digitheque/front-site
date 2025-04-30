import React, { useEffect } from 'react'

const Digitheque = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Défile jusqu'en haut
      }, []);
    return (
        <div className="h-full grid lg:grid-cols-2 sectionFormation gap-8  mt-[10rem]">

            {/* div place du presentation  */}
            <div className="px-12 sm:pl-24">
                <div className=" relative py-12 sm:w-[25rem]" >
                    <p className="text-[35px] text-bleuRoi font-bold">Digithèques</p>
                    <div className="w-[15rem] h-[4.3rem] border-[4px] border-[#034b653e] absolute top-10 right-9 -z-10"></div>
                </div>


                <p className="text-bleuRoi text-[22px] font-bold">Présentation</p>
                <p className="">
                    Comme pour la bibliothèque qui offre des livres pour favoriser
                    l’apprentissages en autonomie ou améliores sa culture ;
                    ou encore la médiathèque qui offre des outils en média pour
                    obtenir ces résultats ; le digithèque est dotés outils et
                    plateformes numériques pour accompagner les utilisateurs
                    dans leurs démarches de compétence et de savoir faire.
                </p>

                <div className="w-[15vw] h-[6px] bg-bleuRoi rounded-full my-4"></div>
            </div>


            {/* div pleces des differents offres  */}
            <div className="w-full px-8">

                <div className="flex items-center justify-start px-4 py-4 rounded-lg bg-gradient-to-r from-[#4f7d9a71] via-[#0833835e] to-[#07112375]">
                    <div className="text-center bg-white rounded-lg px-2 py-2">
                        <p className="text-[22px] text-bleuRoi font-bold">Tarifs</p>
                        <p className="text-[16px] font-bold">40.000 Ar</p>
                    </div>

                    <div className="text-white ml-4">
                        <p>
                            Abonnement premium+ une semaine : 24H/24H et (6j  sur 7)
                        </p>
                    </div>

                </div>

                <div className="flex items-center justify-start my-8 sm:ml-16 px-4 py-4 rounded-lg bg-gradient-to-r from-[#4f7d9a71] via-[#446cb8d7] to-[#3a5fa3d1]">
                    <div className="text-center bg-white rounded-lg px-2 py-2">
                        <p className="text-[22px] text-bleuRoi font-bold">Tarifs</p>
                        <p className="text-[16px] font-bold">12.000 Ar</p>
                    </div>

                    <div className="text-white ml-4">
                        <p>
                            Abonnement premium : illimité entre 8h et 17h (5j sur 7)
                        </p>
                    </div>

                </div>

                <div className="flex items-center justify-start my-8 px-4 py-4 rounded-lg bg-gradient-to-r from-[#4f7d9a71] via-[#0833835e] to-[#07112375]">
                    <div className="text-center bg-white rounded-lg px-2 py-2">
                        <p className="text-[22px] text-bleuRoi font-bold">Tarifs</p>
                        <p className="text-[16px] font-bold">30.000 Ar</p>
                    </div>

                    <div className="text-white ml-4">
                        <p>
                            Abonnement normal :  limité à 4h par jour entre 8H et 17H (5j sur 7)
                        </p>
                    </div>

                </div>

                <div className="flex items-center justify-start my-8 sm:ml-16 px-4 py-4 rounded-lg bg-gradient-to-r from-[#3f6e8ba1] via-[#083383a3] to-[#071123bc]">
                    <div className="text-center bg-white rounded-lg px-2 py-2">
                        <p className="text-[22px] text-bleuRoi font-bold">Tarifs</p>
                        <p className="text-[16px] font-bold">20.000 Ar</p>
                    </div>

                    <div className="text-white ml-4">
                        <p>
                            Abonnement basic : limité à 2h/jour entre 8H et 17H (5j sur 7)
                        </p>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default Digitheque
