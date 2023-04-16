import teams from '@/constants/teams';
import TeamCard from '@/components/teams/TeamCard';
import SectionTitle from '@/components/shared/SectionTitle';

const Teams = () => {
	return (
		<section id='#teams' className='mt-20'>
			<div className="max-w-[1440px] w-full m-auto p-5">
				<div className="flex flex-col items-center mb-6">
					<SectionTitle title="Equipos" />
				</div>
				<ul className='grid grid-cols-12 gap-4 md:gap-6 lg:gap-10'>
					{teams.map((team) => (
						<TeamCard key={`team-${team.name}`} {...team} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Teams;
