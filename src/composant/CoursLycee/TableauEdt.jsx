import { useState } from 'react';

export default function TableauEdt() {
  // Définir les états pour un effet de survol ou de sélection éventuel
  const [selectedCell, setSelectedCell] = useState(null);
  
  const handleCellHover = (rowIndex, colIndex) => {
    setSelectedCell(`${rowIndex}-${colIndex}`);
  };
  
  const handleCellLeave = () => {
    setSelectedCell(null);
  };
  
  // Définir la structure des données de l'emploi du temps
  const schedule = [
    {
      period: "MATIN",
      slots: [
        { time: "08h-10h", samedi: "MATH", dimanche: "" },
        { time: "10h-12h", samedi: "P.C", dimanche: "" }
      ]
    },
    {
      period: "APRÈS-MIDI",
      slots: [
        { time: "13h-15h", samedi: "MATH", dimanche: "MATH" },
        { time: "15h-17h", samedi: "P.C", dimanche: "P.C" }
      ]
    }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden">
        
        
        <div className="grid grid-cols-4 text-sm md:text-base">
          {/* En-tête du tableau */}
          <div className="bg-white p-3 font-semibold border-b border-r border-gray-300"></div>
          <div className="bg-gray-500 p-3 font-semibold text-center border-b border-r border-gray-300 text-white">HEURE</div>
          <div className="bg-gray-500 p-3 font-semibold text-center border-b border-r border-gray-300 text-white">SAMEDI</div>
          <div className="bg-gray-500 p-3 font-semibold text-center border-b border-gray-300 text-white">DIMANCHE</div>
          
          {/* Contenu du tableau */}
          {schedule.map((row, rowIndex) => (
            <>
              {/* Colonne de période (MATIN/APRÈS-MIDI) */}
              <div 
                key={`period-${rowIndex}`} 
                className="row-span-2 flex items-center justify-center font-medium bg-gray-50 p-2 border-r border-b border-gray-300 text-bleuPolice"
                style={{ gridRow: `span ${row.slots.length}` }}
              >
                {row.period}
              </div>
              
              {/* Lignes d'horaires et matières */}
              {row.slots.map((slot, slotIndex) => (
                <>
                  {/* Colonne d'horaires */}
                  <div 
                    key={`time-${rowIndex}-${slotIndex}`} 
                    className="p-3 text-center border-r border-b border-gray-300 bg-gray-50 text-gray-700"
                  >
                    {slot.time}
                  </div>
                  
                  {/* Samedi */}
                  <div 
                    key={`samedi-${rowIndex}-${slotIndex}`}
                    className={`p-4 text-center border-r border-b border-gray-300 transition-all duration-200 ${
                      selectedCell === `${rowIndex}-${slotIndex}-samedi` ? 'bg-gray-500' : 'bg-white'
                    }`}
                    onMouseEnter={() => handleCellHover(`${rowIndex}-${slotIndex}-samedi`)}
                    onMouseLeave={handleCellLeave}
                  >
                    <span className={`font-medium ${slot.samedi === 'MATH' ? 'text-bleuRoi' : 'text-blue-700'}`}>
                      {slot.samedi}
                    </span>
                  </div>
                  
                  {/* Dimanche */}
                  <div 
                    key={`dimanche-${rowIndex}-${slotIndex}`}
                    className={`p-4 text-center border-b border-gray-300 transition-all duration-200 ${
                      selectedCell === `${rowIndex}-${slotIndex}-dimanche` ? 'bg-gray-500' : 
                      slot.dimanche === '' ? 'bg-gray-500' : 'bg-white'
                    }`}
                    onMouseEnter={() => handleCellHover(`${rowIndex}-${slotIndex}-dimanche`)}
                    onMouseLeave={handleCellLeave}
                  >
                    <span className={`font-medium ${slot.dimanche === 'MATH' ? 'text-bleuRoi' : slot.dimanche === 'P.C' ? 'text-blue-700' : ''}`}>
                      {slot.dimanche}
                    </span>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}