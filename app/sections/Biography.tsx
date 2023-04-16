import Image from 'next/image';

import SectionTitle from '../components/shared/SectionTitle';

const paragraphStyle =
  'text-white p-5 leading-[28px] text-justify md:text-[17px] md:leading-[32px] lg:text-[19px] lg:leading-[36px]';
const highlightText =
  'font-marker text-[17px] md:text-[19px] lg:text-[21px] text-gradient-gold';

const Biography = () => {
	return (
		<section id="biography" className="pt-20">
			<div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
				<div className="p-5 flex flex-col items-center text-center gap-6 mb-4">
					<SectionTitle title="Biografía" />
					<p className="text-white text-[17px] md:text-[19px] lg:text-[21px] leading-[27px]">
            Conoce la historia de Lionel Messi, el{' '}
						<span className="font-marker text-gradient-gold">
              jugador prodigioso
						</span>{' '}
            que superó obstáculos para convertirse en ícono global del fútbol,
            su carrera, vida personal y logros más destacados.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row-reverse gap-8">
					<section className="w-full lg:w-[55%]">
						<div className="mt-5 relative bg-[url('/images/topogigio.jpg')] w-full h-[300px] sm:h-[340px] md:h-[390px] lg:h-[70%] xl:h-[80%] bg-cover bg-center z-[1] blue-solid-shadow">
							<div className="h-full w-full absolute bg-[rgba(0,0,0,0.4)] z-[2]" />
							<div className="absolute z-[3] h-[220px] md:h-[250px] lg:h-[300px] xl:h-[400px] w-[220px] md:w-[250px] lg:w-[300px] xl:w-[400px] -bottom-[110px] left-[calc(50%-110px)] md:left-[calc(50%-125px)] lg:left-[calc(50%-150px)] xl:left-[calc(50%-200px)] border-[rgb(0,0,1)] border-x-[24px] border-t-[24px]">
								<Image src="/images/niño.jpg" fill alt="messi niño" />
							</div>
						</div>
					</section>
					<section className="lg:w-[45%] flex flex-col mt-[120px] lg:mt-0">
						<p className={`${paragraphStyle}`}>
              Lionel Messi nació el 24 de junio de 1987 en{' '}
							<span className={highlightText}>Rosario, Argentina</span>. Desde
              muy joven, mostró un gran talento para el fútbol y comenzó a jugar
              en las categorías inferiores del Newell&apos;s Old Boys. Sin
              embargo, su carrera dio un giro inesperado cuando fue
              diagnosticado con una deficiencia en la hormona del crecimiento a
              los 11 años.
						</p>
						<p className={`${paragraphStyle}`}>
              El <span className={highlightText}>FC Barcelona</span> ofreció
              pagarle el tratamiento, por lo que Messi y su familia decidieron
              mudarse a España para darle la oportunidad de unirse a las fuerzas
              juveniles del equipo. A los 16 años, Messi debutó en el primer
              equipo del Barcelona en un partido amistoso contra el Porto.
						</p>
						<p className={`${paragraphStyle}`}>
              Desde entonces, se ha convertido en uno de los{' '}
							<span className={highlightText}>futbolistas más talentosos</span>{' '}
              de la historia, reconocido por su humildad y dedicación al juego.
						</p>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Biography;
