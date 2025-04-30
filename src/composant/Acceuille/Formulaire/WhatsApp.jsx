import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Angry, Annoyed } from "lucide-react";

export default function Whatsapp() {
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const isActive = (field) => {
    return focusedField === field || (field === "message" && message !== "");
  };

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };
  const testeAppareil = () => {
    if (!isMobile()) {
      setFeedback({
        type: "error",
        text: "Cette fonctionnalité n’est disponible que sur téléphone mobile (Android ou iOS).",
      });
      return;
    }
  };

  useEffect(() => {
    testeAppareil();
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    testeAppareil();

    const phoneNumber = "261385382072";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {isMobile() ? (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
               {" "}
          <h2 className="text-start text-sm mb-6">
                    Si vous avez des questions ou des suggestions, n'hésitez pas
            à nous   envoyer un message      {" "}
          </h2>
               {" "}
          {feedback.text && (
            <div
              className={`mb-6 px-4 py-3 rounded-md text-sm font-medium shadow-sm ${
                feedback.type === "error"
                  ? "bg-red-100 text-red-800 border border-red-300"
                  : "bg-green-100 text-green-800 border border-green-300"
              }`}
            >
              {feedback.text}
            </div>
          )}
               {" "}
          <form onSubmit={handleSendMessage}>
                   {" "}
            <div className="relative">
                       {" "}
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 h-32 pt-8"
                required
              />
                       {" "}
              <label
                htmlFor="message"
                className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none bg-white ${
                  isActive("message")
                    ? "text-xs text-bleuRoi top-2"
                    : "text-gray-500 text-base top-6"
                }`}
              >
                            Message          {" "}
              </label>
                     {" "}
            </div>
                   {" "}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-2 mt-4 border-[2px] bg-green-800 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors space-x-3"
            >
                        <span>Envoyer</span>
                        <FaWhatsapp size={18} className="ml-2" />       {" "}
            </button>
                 {" "}
          </form>
             {" "}
        </div>
      ) : (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
          {feedback.text && (
            <div className="mb-6 px-4 py-3 rounded-md text-sm font-medium shadow-sm bg-red-100 text-red-800 border border-red-300 flex items-center space-x-3">
              <Annoyed size={80} />
              <p>{feedback.text}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
