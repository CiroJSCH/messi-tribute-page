import { argentinaTrophies, barcelonaTrophies, parisTrophies } from '@/constants/trophies';
import TrophieCard from '@/components/trophies/TrophieCard';
import SectionTitle from '@/components/shared/SectionTitle';

const Trophies = () => {
	return (
		<section>
			<div>
				<div className='w-full flex justify-center'>
					<SectionTitle title='Trofeos'/>
				</div>
				<section className='mt-10'>
					<div className='py-6 my-4 barcelona-gradient border-y-4'>
						<h3 className='text-center uppercase text-[20px] md:text-[24px] lg:text-[27px] font-marker text-white'>FC Barcelona</h3>
					</div>
					<ul className='grid grid-cols-12 gap-3 sm:gap-5 lg:gap-6 p-5 max-w-[1440px] mx-auto'>
						{
							barcelonaTrophies.map(trophie => (
								<TrophieCard key={trophie.title} {...trophie}/>
							))
						}
					</ul>
				</section>
				<section>
					<div className='py-6 my-4 psg-gradient border-y-4'>
						<h3 className='text-center uppercase text-[20px] md:text-[24px] lg:text-[27px] font-marker text-white'>Paris Saint Germain</h3>
					</div>
					<ul className='grid grid-cols-12 gap-3 sm:gap-5 lg:gap-6 p-5 max-w-[1440px] mx-auto'>
						{
							parisTrophies.map(trophie => (
								<TrophieCard key={trophie.title} {...trophie}/>
							))
						}
					</ul>
				</section>
				<section>
					<div className='py-6 my-4 argentina-gradient border-y-4'>
						<h3 className='text-center uppercase text-[20px] md:text-[24px] lg:text-[27px] font-marker text-gradient-gold'>Selección Argentina</h3>
					</div>
					<ul className='grid grid-cols-12 gap-3 sm:gap-5 lg:gap-6 p-5 max-w-[1440px] mx-auto'>
						{
							argentinaTrophies.map(trophie => (
								<TrophieCard key={trophie.title} {...trophie}/>
							))
						}
					</ul>
				</section>
			</div>
		</section>
	);
};

export default Trophies;