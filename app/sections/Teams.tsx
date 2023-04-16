import { BiTimeFive } from 'react-icons/bi';

import teams from '@/constants/teams';
import TeamCard from '@/components/teams/TeamCard';
import SectionTitle from '@/components/shared/SectionTitle';

const Teams = () => {
	return (
		<section id='teams' className='mt-20'>
			<div className="max-w-[1440px] w-full m-auto p-5">
				<div className="flex flex-col items-center text-center mb-6 gap-6">
					<SectionTitle title="Equipos" />
					<p className='text-white text-[17px] md:text-[19px] lg:text-[21px] leading-[27px]'>Un recorrido por los equipos donde Lionel Messi ha jugado, con sus <span className='font-marker text-gradient-gold'>impresionantes estadísticas</span> que demuestran su impacto en el fútbol mundial.</p>
					<div className='flex items-center text-center gap-4'>
						<BiTimeFive className='text-blue text-[20px] hidden sm:flex'/>
						<p className='text-gray-500 text-[18px] italic'>Datos actualizados al 16/04/2023</p>
					</div>
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