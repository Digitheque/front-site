import React, { useEffect } from "react";

import ville2 from "../../assets/ImageSite/ville2.jpg";
import ville3 from "../../assets/ImageSite/ville3.jpg";
import ville4 from "../../assets/ImageSite/ville4.jpg";
import ville5 from "../../assets/ImageSite/ville5.jpg";
import eau from "../../assets/ImageSite/eau.jpg";
import picka from "../../assets/ImageSite/picka.jpg";
import ScrollReveal from "scrollreveal";


const ImageLieu = () => {

    useEffect(() => {
        ScrollReveal({
          reset: false,
          distance: "60px",
          duration: 2000,
          deley: 400,
        });
        ScrollReveal().reveal("#slide-lieu", {
          deley: 100,
          origin: "left",
          interval: 300,
        });
        ScrollReveal().reveal("#slide-lieutop", {
            deley: 100,
            origin: "top",
            interval: 300,
          });
       
      }, []);
  return (
    <>
      <div
        id="section-city"
        className="mt-[8rem] px-[2rem] md:px-[10rem] mb-10"
      >
        <div className="w-full text-center">
          <h1 className="font-bold text-[2rem] text-bleuRoi" id="slide-lieu">LIEU DE FORMATION</h1>
          <p className="my-4 " id="slide-lieu">
            Découvrez en images l'environnement dans lequel se déroulent nos
            formations. Un cadre propice à <br /> l'apprentissage, équipé pour
            favoriser la concentration et l'échange.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-x-4 mt-[3rem]">
          <div className="md:col-span-2 ">
            <img src={eau} alt="" className="rounded-xl h-[15rem] w-full" id="slide-lieutop"/>

            <div className="w-full grid grid-cols-2 gap-x-4 mt-4">
              <img src={picka} alt="" className="rounded-xl h-[12rem] w-full" id="slide-lieutop" />
              <img
              id="slide-lieutop"
                src={ville3}
                alt=""
                className="rounded-xl h-[12rem] w-full"
              />
            </div>
          </div>

          <div className="md:col-span-1 my-4 md:my-0">
            <img src={ville2} alt="" className="rounded-xl w-full h-[28rem] " id="slide-lieutop" />
          </div>

          <div className="md:col-span-2 ">
            <img src={ville4} alt="" className="rounded-xl h-[15rem] w-full" id="slide-lieutop" />
            <img
              src={ville5}
              alt=""
              className="rounded-xl mt-4 h-[12rem] w-full" id="slide-lieutop"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLieu;
