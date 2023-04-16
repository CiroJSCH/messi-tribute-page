import TrophieCard from './TrophieCard';

type Trophie = {
  title: string;
  amount: number;
  image: string;
  years: string[];
};

interface TrophiesContainerProps {
  trophies: Trophie[];
  gradient: string;
  teamName: string;
  goldText?: boolean;
}

const TrophiesContainer = ({
	gradient,
	teamName,
	trophies,
	goldText,
}: TrophiesContainerProps) => {
	return (
		<section>
			<div className={`py-6 my-4 barcelona-gradient border-y-4 ${gradient}`}>
				<h3 className={`text-center uppercase text-[20px] md:text-[24px] lg:text-[27px] font-marker ${goldText ? 'text-gold' : 'text-white'}`}>
					{teamName}
				</h3>
			</div>
			<ul className="grid grid-cols-12 gap-3 sm:gap-5 lg:gap-6 p-5 max-w-[1440px] mx-auto my-10">
				{trophies.map((trophie) => (
					<TrophieCard key={trophie.title} {...trophie} />
				))}
			</ul>
		</section>
	);
};

export default TrophiesContainer;
