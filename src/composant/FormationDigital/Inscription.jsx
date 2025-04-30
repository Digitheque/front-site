import React from "react";
import logo from "../../assets/img/logo.png";

const Inscription = () => {
  return (
    <div className="px-8 md:px-[7rem] mt-[5rem] relative">
      <img
        src={logo}
        alt=""
        width={500}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"
      />

      <div
        className="flex items-start justify-center text-gray-600"
       id="slide-img"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg">
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              INSCRIPTION
            </h1>
            <p>
              Acune procédure d'incription n'est demandée. Il suffit d'acheter
              un coupon d'unité de crédits qui donne droit à tous les cours de
              30h du crédit. Dossier d'inscription : Une photo
            </p>
          </div>

          <div
            className="bg-[#d1d1d11a] px-4 md:px-[4rem] py-[1rem] rounded-lg"
           id="slide-img"
          >
            <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center ">
              FRAIS
            </h1>
            <p>
              Une unité de crédits coûte 100 000 MGA. Une réduction est
              applicable pour un achat de coupons d'unités de formations, soit
              450 000 MGA pour une unité de formations complètes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
