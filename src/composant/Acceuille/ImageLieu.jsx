import React, { useEffect } from "react";

import image2 from "../../assets/ImageSite/image2.jpeg";
import image3 from "../../assets/ImageSite/image3.jpeg";
import image4 from "../../assets/ImageSite/image4.jpeg";
import image5 from "../../assets/ImageSite/image5.jpeg";
import image1 from "../../assets/ImageSite/image1.jpeg";
import image6 from "../../assets/ImageSite/image6.jpeg";

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
          <h1 className="font-bold text-[2rem] text-bleuRoi" id="slide-lieu">
            LIEU DE FORMATION
          </h1>
          <p className="my-4 " id="slide-lieu">
            Découvrez en images l'environnement dans lequel se déroulent nos
            formations. Un cadre propice à <br /> l'apprentissage, équipé pour
            favoriser la concentration et l'échange.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-x-4 mt-[3rem]">
          <div className="md:col-span-2 ">
            <img
              src={image1}
              alt=""
              className="rounded-xl h-[15rem] w-full"
              id="slide-lieutop"
            />

            <div className="w-full grid grid-cols-2 gap-x-4 mt-4">
              <img
                src={image4}
                alt=""
                className="rounded-xl h-[12rem] w-full"
                id="slide-lieutop"
              />
              <img
                id="slide-lieutop"
                src={image5}
                alt=""
                className="rounded-xl h-[12rem] w-full"
              />
            </div>
          </div>

          <div className="md:col-span-1 my-4 md:my-0">
            <img
              src={image6}
              alt=""
              className="rounded-xl w-full h-[28rem] "
              id="slide-lieutop"
            />
          </div>

          <div className="md:col-span-2 ">
            <img
              src={image2}
              alt=""
              className="rounded-xl h-[15rem] w-full"
              id="slide-lieutop"
            />
            <img
              src={image3}
              alt=""
              className="rounded-xl mt-4 h-[12rem] w-full"
              id="slide-lieutop"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLieu;
