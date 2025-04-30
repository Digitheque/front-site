import React from "react";
import logo from "../../assets/img/logo.png";

const Inscription = () => {
  return (
    <div className="px-8 md:px-[7rem] mt-[8rem] relative">
      <img
        src={logo}
        alt=""
        width={500}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"
      />

      <div className="flex items-start justify-center text-gray-600" id="slide-presentation">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg">
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              INSCRIPTION
            </h1>
            <p>
              Pour pouvoir participer à nos séances d’Accompagnement
              Personnalisé, il suffit acheter un ou plusieurs carnets de coupons
              de 10 coupons. Un coupon donne droit d'assister à une séance de 2h
              d'Accompagnement Personnalisé. Ainsi, l'lélève vient aux AP selon
              les matières ou les chapitres qui l'intéresse
            </p>
          </div>

          <div className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg" id="slide-presentation">
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              FRAIS
            </h1>
            <p>
              Il n'y aucun frais d'inscription ni un engamgent mensuel. Il
              suffit d'acheter un carnet ayant au moins dix cooupons. Un frais
              de dossier de 10 000 MGA est demandé lors du prmier achat.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
