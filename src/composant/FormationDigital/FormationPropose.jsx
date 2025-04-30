import React, { useState } from "react";
import {
  BookOpen,
  Code,
  Shield,
  Monitor,
  Server,
  Globe,
  Lock,
  CreditCard,
} from "lucide-react";

export default function FormationPropose() {
  // État pour suivre les modules sauvegardés
  const [savedModules, setSavedModules] = useState([]);

  // Données des modules (version simplifiée pour la démo)
  const modules = [
    {
      id: "info-1",
      icon: <Code size={20} />,
      category: "INFO - 1",

      title: "Programmation Orienté Objet",
      subtitle: "Python et C++",

      points: "30 POINTS",
      topics: [
        "Les paradigmes de programmation et introduction au POO",
        "Notions de base en algorithmique et programmation",
        "Classes et objets",
      ],
    },
    {
      id: "info-2",
      icon: <Shield size={20} />,
      category: "INFO - 2",

      title: "Introduction au Hacking et à la sécurité",
      subtitle: "",

      points: "30 POINTS",
      topics: [
        "Les systèmes d'exploitation open source",
        "Architecture machine, architecture réseau",
        "Formes d'attaques, modes opératoires, acteurs, enjeux",
        "Audits et tests d'intrusion, place dans un SMSI",
      ],
    },
    {
      id: "info-3",
      icon: <Globe size={20} />,

      category: "INFO - 3",
      title: "Sniffing, interception, analyse, injection réseau",
      subtitle: "",

      points: "30 POINTS",
      topics: [
        "Anatomie d'un paquet, tcpdump, Wireshark, tshark",
        "Détournement 	et interception de communications (Man-in-the-Middle, attaques de 	VLAN, les pots de miel)",
        "Paquets : Sniffing, lecture/analyse à partir d'un pcap, extraction des données utiles, représentations graphiques",
        "Scapy 	: architecture, capacités, utilisation",
      ],
    },

    {
      id: "info-4",
      icon: <Globe size={20} />,

      category: "INFO - 4",
      title: "La reconnaissance, le scanning et l'énumération",
      subtitle: "",

      points: "30 POINTS",
      topics: [
        "L'intelligence 	gathering, le hot reading, l'exploitation du darknet, l'Ingénierie 	Sociale.",
        "Reconnaissance de service, de système, de topologie et d'architectures.",
        "Types de scans, détection du filtrage, firewalking, fuzzing.",
        "Le camouflage par usurpation et par rebond, l'identification de chemins avec traceroute, le source routing. L'évasion d'IDS et d'IPS : fragmentations, covert channels. Nmap 	: scan et d'exportation des résultats, les options.Les 	autres scanners : Nessus, ",
      ],
    },
    {
      id: "info-5",
      icon: <Globe size={20} />,

      category: "INFO - 5",
      title: "Les attaques Web",
      subtitle: "",

      points: "30 POINTS",
      topics: [
        "OWASP : organisation, chapitres, Top10",
        "Découverte 	de l'infrastructure et des technologies associées, forces et 	faiblesses.",
        "Côté client : clickjacking, CSRF, vol de cookies",
        "Côté serveur : authentification, injections",
        " Inclusion de fichiers locaux et distants, attaques et vecteurs cryptographiques. Évasion et contournement des protections : exemple des techniques de 	contournement de WAF. Outils 	Burp Suite, ZAP, Sqlmap, BeEF."
      ],
    },
  
    {
        id: "info-6",
        icon: <Globe size={20} />,
  
        category: "INFO - 6",
        title: " Les attaques applicatives et post-exploitation",
        subtitle: "",
  
        points: "30 POINTS",
        topics: [
          "Attaque 	des authentifications Microsoft, PassTheHash.",
          "Du 	C à l'assembleur au code machine. Les shellcodes. L'encodage 	de shellcodes, suppression des NULL bytes.",
          " Les 	Rootkits. Exploitations de processus: Buffer Overflow, ROP, Dangling 	Pointers. Protections 	et contournement: Flag GS, ASLR, PIE, RELRO, Safe SEH, DEP. 	Shellcodes avec adresses hardcodées/LSD.",
          "Côté serveur : authentification, injections",
          "  Metasploit 	: architecture, fonctionnalités, interfaces, workspaces, écriture 	d'exploit, génération de Shellcodes."
        ],
      },

      {
        id: "info-7",
        icon: <Globe size={20} />,
  
        category: "FI -1 FinTech",
        title: "Finance et Technologie",
        subtitle: "",
  
        points: "30 POINTS",
        topics: [
          "Généralité sur l'ingénierie financière",
          "L'écosystème FinTech ",
          "Explore strategies for transforming and disrupting financial and banking services",
          "Evaluate the major trends in fintech and the opportunities they present",
          "Analyze how existing products can benefit from fintech trends",
          ],
      },
  ];

  // Fonction pour basculer l'état de sauvegarde d'un module
  const toggleSave = (moduleId) => {
    if (savedModules.includes(moduleId)) {
      setSavedModules(savedModules.filter((id) => id !== moduleId));
    } else {
      setSavedModules([...savedModules, moduleId]);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((module) => (
            <div
              id="slide-img"
              key={module.id}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium">{module.category}</p>
                      <p className="text-xs text-gray-500">MODULE</p>
                    </div>
                  </div>

                  <div className="h-11 w-11 rounded-full bg-blue-400 text-white flex items-center justify-center mr-2">
                    {module.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2">{module.title}</h3>
                {module.subtitle && (
                  <p className="text-gray-600 mb-3 text-sm">
                    {module.subtitle}
                  </p>
                )}

                {/* Price */}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="font-bold text-base">{module.points}</p>
                  </div>
                  <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition">
                    Crédit
                  </button>
                </div>
              </div>

              {/* Topics Preview - on hover */}
              <div className="px-5 pb-4 -mt-1">
                <div className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-all group">
                  <p className="font-medium flex items-center text-xs">
                    <span>Contenu du module</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1 transform group-hover:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </p>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-[15rem] transition-all duration-300">
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="text-xs">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
