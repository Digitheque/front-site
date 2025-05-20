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

      <div
        className="flex items-start justify-center text-gray-600"
        id="slide-presentation"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg">
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              FRAIS ET MODALITÉS DE PAIEMENT
            </h1>
            <p>
              Vous n’avez pas de frais d'inscription ni de frais de dossier à
              payer. Vous achetez un ou plusieurs carnet de 10 coupons
              nominatifs.
            </p>
          </div>

          <div
            className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg"
            id="slide-presentation"
          >
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              UTILISATION DES COUPONS
            </h1>
            <p>
              Chaque coupon vous donne droit à une séance de 2h d’une matière de
              votre choix. Les coupons sont nominatifs. Une autre personne ne
              peut pas utiliser un coupon acheter sous un autre nom. Par contre,
              la même personne peut suivre des cours différents avec un carnet
              de coupons. Par exemple, avec un carnet de 10 coupons, on peut
              suivre 4h de cours de mathématiques, 4h de cours de Physique et 2h
              de cours d’économie; ou 4h de cours de mathématiques en
              terminales, 6h de cours de mathématiques de préparation de
              concours d’entrée en 1e année à l’Université.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
