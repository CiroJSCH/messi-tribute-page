import { AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';

import { argentinaTrophies, barcelonaTrophies, parisTrophies } from '@/constants/trophies';
import TrophiesContainer from '@/components/trophies/TrophiesContainer';
import SectionTitle from '@/components/shared/SectionTitle';


const Trophies = () => {
	return (
		<section id='#trophies' className='mt-20'>
			<div>
				<div className='w-full flex flex-col items-center text-center gap-6 p-5'>
					<SectionTitle title='Trofeos'/>
					<p className='text-white text-[17px] md:text-[19px] lg:text-[21px] leading-[27px]'>La impresionante lista de trofeos de Lionel Messi, reflejo de su <span className='font-marker text-gradient-gold'>incomparable habilidad</span> y dedicación en el fútbol.</p>
					<Link href="https://es.wikipedia.org/wiki/Anexo:Palmar%C3%A9s_y_distinciones_individuales_de_Lionel_Messi#Distinciones_individuales" className='flex items-center text-center gap-4'>
						<AiOutlineLink className='text-blue text-[20px] hidden sm:flex'/>
						<p className='text-gray-500 text-[18px] italic'>Consultá las distinciones individuales de Messi acá</p>
					</Link>
				</div>
				<TrophiesContainer gradient='barcelona-gradient' teamName='FC Barcelona' trophies={barcelonaTrophies}/>
				<TrophiesContainer gradient='psg-gradient' teamName='Paris Saint Germain' trophies={parisTrophies}/>
				<TrophiesContainer gradient='argentina-gradient' teamName='Selección Argentina' trophies={argentinaTrophies} goldText />
			</div>
		</section>
	);
};

export default Trophies;