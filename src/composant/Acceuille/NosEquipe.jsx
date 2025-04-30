import React, { useEffect } from "react";
import equipe1 from "../../assets/img/equipe1.jpeg";
import equipe2 from "../../assets/img/equipe2.jpeg";
import equipe3 from "../../assets/img/equipe3.jpeg";
import equipe4 from "../../assets/img/equipe4.jpg";
import ScrollReveal from "scrollreveal";
import { Star } from "lucide-react";

const NosEquipe = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-aquipe", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
    ScrollReveal().reveal("#slide-equipetop", {
      deley: 100,
      origin: "top",
      interval: 300,
    });
  }, []);
  return (
    <div className="w-full px-8 md:px-[10rem] mt-[10rem]">
      <div className="text-center md:text-start">
        <h1 className="font-bold text-[2rem] text-bleuRoi" id="slide-aquipe">
          L’équipe du PROJET
        </h1>
        <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
          <Star className="text-yellow-500" />
          <p id="slide-aquipe" className="font-bold">
            Initiateur du projet Digithèque{" "}
          </p>
        </div>
      </div>

      <div className="w-full grid gap-[5rem] mt-[6rem]">
        <div className="flex items-center justify-start md:space-x-[5rem] md:flex-row flex-col text-center md:text-start">
          <img
            id="slide-equipetop"
            src={equipe2}
            alt=""
            className="rounded-full h-[12rem] w-[12rem] border-[3px] border-bleuRoi"
          />

          <div className="mt-[2rem] md:mt-0" id="slide-equipetop">
            <p className="font-bold text-[22px]">Monsieur François-Lévy</p>
            <p className="text-gray-600">DAWIDSON </p>

            <hr className="border-[1px] border-gray-200 mt-4" />

            <li className=" my-2">
              Professeur agrégé de Mathématiques(Paris) et Maître de Conférences
              à l’Université de Fianarantsoa.
            </li>

            <li className=" my-2 ">
              Enseignant de mathématiques et ses applications. Enseignant
              d’économétrie et de finance de marché.
            </li>

            <li className=" my-2 ">
              Chercheur en sciences de l’éducation et membre de l’équipe de
              recherche canadienne : Canadian Mathematics Education Stydy Group
              (CMESG) :{" "}
              <a href=" https://www.cmesg.org"> https://www.cmesg.org</a>
            </li>

            {/* <button className="bg-bleuRoi px-4 py-1 text-sm flex items-center justify-center text-white rounded-md my-2 space-x-4">
              <p>Lisez-plus</p>
              <MoveRight />
            </button> */}
          </div>
        </div>

        <div className="flex items-center justify-start md:space-x-[5rem] md:flex-row flex-col text-center md:text-start">
          <img
            id="slide-equipetop"
            src={equipe1}
            alt=""
            className="rounded-full h-[12rem] w-[12rem] border-[3px] border-bleuRoi"
          />

          <div className="mt-[2rem] md:mt-0" id="slide-equipetop">
            <p className="font-bold text-[22px]">Monsieur Patrick </p>
            <p className="text-gray-600">RAKOTOMAROLAHY </p>

            <hr className="border-[1px] border-gray-200 mt-4" />
            <li className=" my-2">
              Enseignant de Finances Mathématiques, de Statistiques, et de
              Machine Learning
            </li>

            <li className=" my-2">
              Enseignant de Finances Mathématiques, de Statistiques, et de
              Machine Learning
            </li>
            <li className=" my-2">
              Chercheur en mathématiques appliquées et responsable de l’équipe
              de recherche PSE (Probabilité - Statistique - Econométrie) du
              Laboratoire LaMAF de l’UF
            </li>
          </div>
        </div>

        <div className="flex items-center justify-start md:space-x-[5rem] md:flex-row flex-col text-center md:text-start">
          <img
            id="slide-equipetop"
            src={equipe3}
            alt=""
            className="rounded-full h-[12rem] w-[12rem] border-[3px] border-bleuRoi"
          />

          <div className="mt-[2rem] md:mt-0" id="slide-equipetop">
            <p className="font-bold text-[22px]">Madame RANAIVO</p>
            <p className="text-gray-600"> Lalasoa Nadia </p>

            <hr className="border-[1px] border-gray-200 mt-4" />
            <li className=" my-2">
              Enseignante vacataire à la Faculté d'Économie-Gestion et des
              Sciences sociales de Développement (UF)
            </li>

            <li className=" my-2">Doctorante en Économie de l'environnement</li>
          </div>
        </div>

        <div className="flex items-center justify-start md:space-x-[5rem] md:flex-row flex-col text-center md:text-start">
          <img
            id="slide-equipetop"
            src={equipe4}
            alt=""
            className="rounded-full h-[12rem] w-[12rem] border-[3px] border-bleuRoi"
          />

          <div className="mt-[2rem] md:mt-0" id="slide-equipetop">
            <p className="font-bold text-[22px]">Mademoiselle RAJOELISON</p>
            <p className="text-gray-600">Lalaharitiana Marie Lucienne </p>

            <hr className="border-[1px] border-gray-200 mt-4" />
            <li className=" my-2">
              RAJOELISON, Étudiante en Master à l'Ecole Nationale d'Informatique
              (ENI) Fianarantsoa
            </li>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
          <Star className="text-yellow-500" />
          <p id="slide-aquipe" className="font-bold">
            L’équipe pédagogique{" "}
          </p>
        </div>

        <div className="flex items-center justify-start md:space-x-[5rem] md:flex-row flex-col text-center md:text-start">
          <img
            id="slide-equipetop"
            src={equipe4}
            alt=""
            className="rounded-full h-[12rem] w-[12rem] border-[3px] border-bleuRoi"
          />

          <div className="mt-[2rem] md:mt-0" id="slide-equipetop">
            <p className="font-bold text-[22px]">Enseignants Dans le Digital</p>
            <p className="text-gray-600">Enseignants des cours d’accompagnement  </p>

            <hr className="border-[1px] border-gray-200 mt-4" />
            <li className=" my-2">
              Les enseignants des cours d’accompagnement sont des professeurs en
              poste alors que les enseignants dans le digital sont des
              chercheurs ou étudiants qui ont au moins soutenus leurs mémoires
              de master 2.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosEquipe;
