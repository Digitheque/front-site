import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navig = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "Digitheque" && password == "Digitheque1234") {
        navig("/page");
    }
    else{
        alert("Validation incorrect")
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-[80vw]  sm:w-[50rem] h-[30vh] sm:h-[80vh] bg-bleuRoiFonce rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-[10rem] h-[15vh] bg-bleuRoiFonce rounded-tl-full"></div>
      <div className="absolute bottom-16 left-16 w-4 h-4 bg-bleuRoiFonce rounded-full"></div>
      
      <div className="flex flex-col md:flex-row h-full w-full relative z-10">
        {/* Partie gauche - Titre */}
        <div className="text-white mt-[-15vh] sm:mt-0 p-12 md:w-1/2">
          <div className="mt-24">
            <h2 className="text-2xl font-normal">Bienvenue</h2>
            <h1 className="text-5xl font-bold mt-2">Digitheque</h1>
          </div>
        </div>
        
        {/* Partie droite - Formulaire */}
        <div className="md:w-1/2 p-4 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-bleuRoiFonce mb-8 text-center mt-[10vh] sm:mt-[15vh]">Authetification</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-bleuRoiFonce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Utilisateur ..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="h-1 w-full bg-bleuRoiFonce mt-1"></div>
              </div>
              
              <div className="mb-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-bleuRoiFonce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mot de passe ..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="h-1 w-full bg-bleuRoiFonce mt-1"></div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-bleuRoiFonce text-white p-4 rounded-md flex items-center justify-center font-medium"
              >
                <Globe className="mr-2" size={20} />
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}