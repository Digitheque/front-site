import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";

export default function Email() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
    
    emailjs
      .send(
        "service_g4nkg1w", // à remplacer par votre service ID
        "template_i72g8m4", // à remplacer par votre template ID
        {
          from_name: formData.nom,
          from_email: formData.email,
          message: formData.message,
        },
        "EwDmVPH-LxRT_GYrq" // à remplacer par votre Public Key
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ nom: "", email: "", message: "" });
        
        // Réinitialiser le message de succès après 3 secondes
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Erreur lors de l'envoi de l'email.");
      });
  };
  
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-start text-sm mb-6">
        Si vous avez des questions ou des suggestions, n'hésitez pas à nous
        envoyer un message
      </h2>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="text-center">Votre message a été envoyé avec succès!</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            onFocus={() => handleFocus("nom")}
            onBlur={handleBlur}
            className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-14 pt-6 pb-2"
            required
          />
          <label
            htmlFor="nom"
            className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
              isActive("nom")
                ? "text-xs text-bleuRoi top-2"
                : "text-gray-500 text-base top-1/2 -translate-y-1/2"
            }`}
          >
            Nom
          </label>
        </div>
        
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-14 pt-6 pb-2"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
              isActive("email")
                ? "text-xs text-bleuRoi top-2"
                : "text-gray-500 text-base top-1/2 -translate-y-1/2"
            }`}
          >
            Email
          </label>
        </div>
        
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-32 pt-8"
            required
          />
          <label
            htmlFor="message"
            className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
              isActive("message")
                ? "text-xs text-bleuRoi top-2"
                : "text-gray-500 text-base top-6"
            }`}
          >
            Message
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center px-6 py-2 border-[2px] bg-green-800 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors space-x-3"
        >
           <span>Envoyer</span>
          {isSubmitting ? (
            <ClipLoader color="white" size={18} />
          ) : (
            <>
             
              <Send size={18} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}