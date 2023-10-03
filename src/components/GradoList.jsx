import React from 'react';
import { imgs, grados } from '../data';
import { GradoCard } from './GradoCard';

const [
	qto,
	sto
] = imgs;

export const GradoList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
        {/* Quinto grado */}
			<GradoCard
				category={grados.quinto}
				src={qto}
				alt={`${grados.quinto} Grado`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* sexto grado */}
			<GradoCard
				category={grados.sexto}
				src={sto}
				alt={`${grados.sexto} Grado`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			
	</div>
  )
}
