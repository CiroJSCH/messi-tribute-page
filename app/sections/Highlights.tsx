
import { AiFillInfoCircle } from 'react-icons/ai';

import highlightsTop from '@/constants/highlightsTop';
import Item from '@/components/highlights/Item';

import SectionTitle from '../components/shared/SectionTitle';

const Highlights = () => {
	return (
		<section id='#highlights' className='mt-20'>
			<div className='flex flex-col w-full max-w-[1440px] items-center mx-auto p-5'>
				<div className='flex flex-col items-center text-center gap-6'>
					<SectionTitle title="Destacados"/>
					<p className='text-white text-[17px] md:text-[19px] lg:text-[21px] leading-[27px]'>Messi ha tenido muchisimos <span className='font-marker text-gradient-gold'>momentos inolvidables</span> pero, a mi parecer, estos cinco son los más destacados:</p>
					<div className='flex items-center text-center gap-4'>
						<AiFillInfoCircle className='text-blue text-[20px] hidden sm:flex'/>
						<p className='text-gray-500 text-[18px] italic'>Tocá la imagen para ver la información</p>
					</div>
				</div>
				<section className='w-full mt-10'>
					<ol className='grid grid-cols-12 grid-rows-5 sm:grid-rows-3 h-[1500px] sm:h-[900px] gap-4 md:gap-5 xl:gap-6'>
						{
							highlightsTop.map((highlight, index) => (
								<Item key={`highlight-${index}`} index={index} {...highlight}/>
							))
						}
					</ol>
				</section>
			</div>
		</section>
	);
};

export default Highlights;


// 1 - Campeon del Mundo

// 2- Campeon copa america

// 3 - Gol final champions contra MU

// 4 - Messi mostrando la camiseta al bernabeu

// 5 - Record de goles en un año calendario