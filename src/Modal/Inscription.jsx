import { BookKey } from 'lucide-react'
import React from 'react'

const Inscription = () => {
    return (
        <div>

            <div className='flex items-center justify-start space-x-3 mb-4'>
                <div className='flex items-center justify-start space-x-3 bg-bleuRoi rounded-full px-2 py-2'>
                    <BookKey className="text-white" />
                </div>
                <p className='text-bleuRoi text-[25px] font-bold'>Inscription</p>
            </div>
            <p className='text-start'>
                Pour pouvoir participer à nos séances d’Accompagnement Personnalisé,
                il suffit acheter un ou plusieurs carnets de coupons de 10 coupons.
                Un coupon donne droit d'assister à une séance de 2h d'Accompagnement
                Personnalisé. Ainsi, l'lélève vient aux AP selon les matières
                ou les chapitres qui l'intéresse.
            </p>

        </div>
    )
}

export default Inscription
