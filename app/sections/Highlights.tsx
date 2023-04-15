
import highlightsTop from '@/constants/highlightsTop';
import Item from '@/components/highlights/Item';

import SectionTitle from '../components/shared/SectionTitle';

const Highlights = () => {
	return (
		<section>
			<div className='flex flex-col w-full max-w-[1440px] items-center mx-auto p-5'>
				<div>
					<SectionTitle title="Destacados"/>
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