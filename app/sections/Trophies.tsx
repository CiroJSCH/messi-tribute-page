import { argentinaTrophies, barcelonaTrophies, parisTrophies } from '@/constants/trophies';
import TrophiesContainer from '@/components/trophies/TrophiesContainer';
import SectionTitle from '@/components/shared/SectionTitle';

const Trophies = () => {
	return (
		<section id='#trophies' className='mt-20'>
			<div>
				<div className='w-full flex justify-center mb-10'>
					<SectionTitle title='Trofeos'/>
				</div>
				<TrophiesContainer gradient='barcelona-gradient' teamName='FC Barcelona' trophies={barcelonaTrophies}/>
				<TrophiesContainer gradient='psg-gradient' teamName='Paris Saint Germain' trophies={parisTrophies}/>
				<TrophiesContainer gradient='argentina-gradient' teamName='Selección Argentina' trophies={argentinaTrophies} goldText />
			</div>
		</section>
	);
};

export default Trophies;