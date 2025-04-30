import { CheckIcon } from 'lucide-react'
import React from 'react'

const Modalite = () => {
    return (
        <div>

            <div className='flex items-center justify-start space-x-3 mb-4'>
                <div className='flex items-center justify-start space-x-3 bg-bleuRoi rounded-full px-2 py-2'>
                    <CheckIcon className="text-white" />
                </div>
                <p className='text-bleuRoi text-[25px] font-bold'>Modalité</p>
            </div>
            <p className='text-start'>
                Les élèves ne s’inscrivent pas pour un cours pour une durée déterminée.
                Des sciences thématiques de 2 H sont proposées. Les élèves ont ainsi
                la possibilité de choisir les séances adaptées de ses besoins.
                
                Par exemple, un élève de Tle peut venir à une séance sur l’intégrales
                ou aux équations différentielles chapitre de mathématique.
                Il peut également venir à une séance sur la trigonométrie,
                un chapitre étudié en classe de première ou à une séance de
                logique et raisonnement ou encore sur la résolution d’équation
                et inéquation, des chapitres étudiés en classe de seconde.
                Un élève peut suivre des séances en mathématique, physique, ou en informatique.

            </p>
        </div>
    )
}

export default Modalite
