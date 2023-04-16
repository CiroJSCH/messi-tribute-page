import { MdDateRange } from 'react-icons/md';
import { GiSoccerField, GiSoccerKick } from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi';
import Image from 'next/image';

interface TeamCard {
  name: string;
  image: string;
  gradient: string;
  description: string;
	position: string;
	debut: number;
	matches: number;
	assists: number;
	goals: number;
}

const TeamCard = ({ description, gradient, image, name, position, assists, debut, goals, matches }: TeamCard) => {
	return (
		<li className={`col-span-12 lg:col-span-11 ${position} flex flex-col md:flex-row md:gap-5 items-center md:items-start md:justify-between px-4 py-10 rounded-md border-b-gold border-b-2`}>
			<section className='w-full lg:w-[65%] xl:w-[80%] flex flex-col'>
				<div className="relative h-[100px] w-[100px] p-2 mx-auto">
					<Image
						src={image}
						alt={`${name} logo`}
						fill
						className="object-contain z-[3]"
					/>
				</div>
				<h3
					className={`${gradient} ${
						name === 'Selección Argentina' ? 'text-gold' : 'text-white'
					} font-marker font-medium text-[20px] uppercase tracking-[1.2px] text-center mt-3`}
				>
					{name}
				</h3>
			</section>

			<section className="text-center w-[100%] md:text-start mt-4 md:mt-0">
				<p className="text-white leading-[26px] lg:text-[17px] lg:leading-[30px] mt-2 md:mt-0">{description}</p>
				<div className="mt-3">
					<h4 className="text-blue font-medium uppercase text-[18px] lg:text-[20px]">
            Estadísticas
					</h4>
					<ul className="flex flex-col items-center md:items-start sm:justify-center md:justify-start sm:flex-wrap sm:flex-row lg:flex-row gap-4 mt-5">
						<li className="flex items-center gap-1">
							<p className="flex items-center gap-2 font-semibold">
								<MdDateRange className="text-white text-[24px]" />
								<span className="text-gradient-gold uppercase text-[17px]">
                  Debut:
								</span>
							</p>
							<span className="text-white font-medium">{debut}</span>
						</li>
						<li className="flex items-center gap-1">
							<p className="flex items-center gap-2 font-semibold">
								<GiSoccerField className="text-white text-[24px]" />
								<span className="text-gradient-gold uppercase text-[17px]">
                  Partidos
								</span>
							</p>
							<span className="text-white font-medium">{matches}</span>
						</li>
						<li className="flex items-center gap-1">
							<p className="flex items-center gap-2 font-semibold">
								<GiSoccerKick className="text-white text-[24px]" />
								<span className="text-gradient-gold uppercase text-[17px]">
                  Asistencias
								</span>
							</p>
							<span className="text-white font-medium">{assists}</span>
						</li>
						<li className="flex items-center gap-1">
							<p className="flex items-center gap-2 font-semibold">
								<BiFootball className="text-white text-[24px]" />
								<span className="text-gradient-gold uppercase text-[17px]">
                  Goles
								</span>
							</p>
							<span className="text-white font-medium">{goals}</span>
						</li>
					</ul>
				</div>
			</section>
		</li>
	);
};

export default TeamCard;
