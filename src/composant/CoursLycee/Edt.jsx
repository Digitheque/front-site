import React from "react";

import cal from "../../assets/ImageSite/cal.jpg";
import TableauEdt from "./TableauEdt";

const Edt = () => {
  return (
    <div className="px-8 md:px-[7rem] mt-[8rem]">
      <h1 className="text-bleuRoi font-bold text-[1.5rem] text-center " id="slide-presentation">
        EMPLOIS DU TEMPS{" "}
      </h1>

      <div className="grid md:grid-cols-2 gap-12 mt-[2rem] md:mt-[4rem]">
        <div className="flex items-center space-x-2">
          {/* <div>
            <img src={cal} alt="" />
          </div> */}
          <div>
            <h1 className="font-bold text-bleuRoi underline text-[20px]" id="slide-presentation">
              Cours pour lycéens
            </h1>
            <p id="slide-presentation">
              Jours de week seulement dont début des cours 12 - 13 avril :
              <span className="font-bold"> Maths et Physique</span>
            </p>

            <p className="" id="slide-presentation">
              <span className="underline font-bold">NB:</span>
              &nbsp; &nbsp;Entre 12h-14h droits de connexion + possibilité de de
              manger sur place
            </p>

            <p id="slide-presentation">
              <span className="underline font-bold">Dates clées</span>
              &nbsp; &nbsp; <span className="text-bleuRoi font-bold">
                BEPC
              </span>{" "}
              30 juin au 3 juillet 2025{" "}|{" "}
              <span className="text-bleuRoi font-bold">BAC</span> : 22 au 25
              Juillet 2025
            </p>
          </div>
        </div>

        <div id="slide-presentation">
           <TableauEdt />
        </div>
      </div>
    </div>
  );
};

export default Edt;
