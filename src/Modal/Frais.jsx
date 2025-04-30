import { DollarSignIcon } from 'lucide-react'
import React from 'react'

const Frais = () => {
    return (
        <div>
            <div className='flex items-center justify-start space-x-3 mb-4'>
                <div className='flex items-center justify-start space-x-3 bg-bleuRoi rounded-full px-2 py-2'>
                    <DollarSignIcon className="text-white" />
                </div>
                <p className='text-bleuRoi text-[25px] font-bold'>Frais</p>
            </div>
            <p className='text-start'>
                Il n'y aucun frais d'inscription ni un engamgent mensuel.
                 Il suffit d'acheter un carnet ayant au moins dix cooupons. 
                 Un frais de dossier de 10 000 MGA est demandé lors du prmier achat.
            </p>
        </div>
    )
}

export default Frais
