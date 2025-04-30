import {
  ArrowRight,
  Facebook,
  Mail,
  MapPin,
  MoveRight,
  Phone,
} from "lucide-react";
import React, { useEffect } from "react";
import MapDigitheque from "./MapDigitheque";
import ScrollReveal from "scrollreveal";

const PlanAcce = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-plan", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
  }, []);
  return (
    <div className="pt-[7rem] px-8 md:px-[5rem] mb-4">
      <div className="grid md:grid-cols-12  md:px-[3rem] mt-6 w-full">
        <div
          className="md:col-span-6 bg-gray-100 flex items-center justify-center h-[30rem] md:h-auto "
          id="slide-plan"
        >
          <MapDigitheque />
        </div>
        <div className="md:col-span-6 shadow-sm rounded-r-lg px-4 md:px-14 py-4 md:py-10">
          <h1 className="text-[25px] text-bleuRoi font-bold" id="slide-plan">
            Contacts Précis
          </h1>
          <p id="slide-plan">
            Vous avez des questions, <br className="hidden md:block" /> une
            sugestion, envie d'échanger ou de nous suivre ?
          </p>

          <hr className="my-4" />
          <p className="font-bold text-gray-500" id="slide-plan">
            N'hésitez pas à nous contacter, nous serons ravis de vous répondre
          </p>

          <div className="grid">
            <div className="flex items-center justify-start space-x-4 my-3">
              <Phone className="text-bleuRoi" id="slide-plan" />
              <p id="slide-plan">+261 38 05 557 25/ +261 37 75 321 30</p>
            </div>

            <div className="flex items-center justify-start space-x-4 my-3">
              <Mail className="text-bleuRoi" id="slide-plan" />
              <p id="slide-plan">digitheque1234@gmail.com</p>
            </div>
          </div>

          <button
            id="slide-plan"
            className="flex items-center justify-center px-4 py-2 bg-green-800 rounded-md text-white space-x-4 my-2 w-full md:w-auto"
          >
            <MapPin />
            <a
              href="https://www.google.com/maps?q=-21.933,46.983"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Ouvrir sur Google Maps
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanAcce;
