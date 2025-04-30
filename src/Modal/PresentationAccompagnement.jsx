import { School2 } from 'lucide-react'
import React from 'react'

const PresentationAccompagnement = () => {
    return (
        <div>
            <div className='flex items-center justify-start space-x-3 mb-4'>
                <div className='flex items-center justify-start space-x-3 bg-bleuRoi rounded-full px-2 py-2'>
                    <School2 className="text-white" />
                </div>
                <p className='text-bleuRoi text-[22px] font-bold'>Accompagnement Personnalisé</p>
            </div>
            <p className='text-start'>
                Une science de 2 H qui regroupe 20 élèves au maximum consiste à
                répondre les difficultés de l’élève, résoudre des problèmes
                adaptés au niveau de l’élève et corriger ses erreurs.
                Nous nous disposons d’une intelligence artificielle
                générative version payante et d’autre applications d’aider
                aux corrections de devoirs. Une science n’est pas ainsi
                dédiée à des corrections d’exercice mais elle est axée
                sur l’interaction professeur élevé et à une évaluation formative en continue.


            </p>
        </div>
    )
}

export default PresentationAccompagnement
