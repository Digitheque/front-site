import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { ClipLoader } from "react-spinners";
import { Send } from "lucide-react";
import { FaFirefoxBrowser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Pagelogin = () => {
  const [formData, setFormData] = useState({
    pseudo: "",
    password: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const isActive = (field) => {
    return focusedField === field || formData[field] !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (formData.pseudo === "digitheque") {
      if (formData.password === "12345678") {
        setIsSubmitting(false);
        navigate("/site");
      } else {
        alert("Mot de passe Incorrect !");
        setIsSubmitting(false);
      }
    } else {
      alert("Pseudo Incorrect !");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] px-4 py-4 shadow-lg rounded-lg">
        <div className="w-full h-full">
          <div className="flex items-center space-x-8">
            <img src={logo} alt="" width={100} />

            <p className="font-bold text-bleuRoi text-[20px]">
              Digithèque Authentification
            </p>
          </div>

          <div className="text-center py-2">
            <p>Veuillez remplir les champs !</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 my-[1rem]">
            <div className="relative">
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                value={formData.pseudo}
                onChange={handleChange}
                onFocus={() => handleFocus("pseudo")}
                onBlur={handleBlur}
                className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-14 pt-6 pb-2"
                required
              />
              <label
                htmlFor="pseudo"
                className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
                  isActive("pseudo")
                    ? "text-xs text-bleuRoi top-2"
                    : "text-gray-500 text-base top-1/2 -translate-y-1/2"
                }`}
              >
                Pseudo
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-14 pt-6 pb-2"
                required
              />
              <label
                htmlFor="password"
                className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
                  isActive("password")
                    ? "text-xs text-bleuRoi top-2"
                    : "text-gray-500 text-base top-1/2 -translate-y-1/2"
                }`}
              >
                Mot de passe
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-2 border-[2px] bg-bleuRoi hover:bg-bleuRoiFonce text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors space-x-3"
            >
              <span>Connecter</span>
              {isSubmitting ? (
                <ClipLoader color="white" size={18} />
              ) : (
                <>
                  <FaFirefoxBrowser size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pagelogin;
