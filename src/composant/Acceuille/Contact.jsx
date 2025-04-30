import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Email from "./Formulaire/Email";
import Whatsapp from "./Formulaire/WhatsApp";
// import fontContact from
const Contact = () => {
  const [isWhatsApp, setWhatsApp] = useState(false);
  return (
    <div className={`contactSection h-[50vh] relative pt-8 mt-[7rem]  ${isWhatsApp ? "mb-[18rem]":"mb-[28rem] sm:mb-[28rem] "}`}>
      <h1 className="text-white font-bold text-[2rem] text-center">
        Contact Rapide
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center md:space-x-4 my-4 flex-col md:flex-row space-y-4 md:space-y-0 ">
          <button
            onClick={() => setWhatsApp(false)}
            className="flex items-center space-x-2 bg-white text-black font-bold px-4 py-4 rounded-md"
          >
            <Mail className="text-yellow-500" size={25} />
            <p>Envoyer message par E-mail</p>
          </button>

          <button
            onClick={() => setWhatsApp(true)}
            className="flex items-center space-x-2 bg-white text-black font-bold px-4 py-4 rounded-md"
          >
            <FaWhatsapp className="text-green-500" size={25} />
            <p>Envoyer message par WhatsApp</p>
          </button>
        </div>
      </div>

      <div className={`absolute  ${isWhatsApp ? "top-[27rem] md:top-[22rem]" : "top-[32rem] md:top-[27rem]"} left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-sm rounded-xl w-[27rem] md:w-[30rem]`}>
        {isWhatsApp ? <Whatsapp /> : <Email />}
      </div>
    </div>
  );
};

export default Contact;
