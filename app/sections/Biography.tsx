import Image from 'next/image';

import SectionTitle from '../components/shared/SectionTitle';

const paragraphStyle =
  'text-white p-5 leading-[28px] text-justify md:text-[17px] md:leading-[32px] lg:text-[19px] lg:leading-[36px]';
const highlightText =
  'font-marker text-[17px] md:text-[19px] lg:text-[21px] text-gradient-gold';

const Biography = () => {
	return (
		<section className="h-auto">
			<div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
				<div className="p-5">
					<SectionTitle title="Biografía" />
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
					<section className="lg:w-[45%] flex flex-col gap-1 mt-[120px] lg:mt-0">
						<p className={`${paragraphStyle}`}>
							<span className={highlightText}>Lionel Messi</span> es un
              futbolista argentino considerado uno de los{' '}
							<span className={highlightText}>
                mejores jugadores de todos los tiempos
							</span>
              . Nació el 24 de junio de 1987 en Rosario,{' '}
							<span className={highlightText}>Argentina</span>. A los 13 años,
              se trasladó a <span className={highlightText}>Barcelona</span>{' '}
              para unirse a la academia juvenil del club y, desde entonces, ha
              pasado gran parte de su carrera profesional en el Barcelona, hasta
              el año 2021 cuando se transladó a{' '}
							<span className={highlightText}>Paris Saint Germain</span>.
						</p>
						<p className={`${paragraphStyle}`}>
              Messi ha ganado numerosos títulos con el Barcelona, incluyendo 10
              Ligas de España, 7 Copas del Rey y 4 Ligas de Campeones de la
              UEFA. Ha sido galardonado con el{' '}
							<span className={highlightText}>
                Balón de Oro de la FIFA en 7 ocasiones
							</span>{' '}
              , lo que lo convierte en el jugador con más premios de este tipo.
              También ha sido el máximo goleador de la Liga de España en 8
              temporadas.
						</p>
						<p className={`${paragraphStyle}`}>
              Con la selección argentina, Messi ha ganado la medalla de oro en
              los Juegos Olímpicos de Beijing 2008, la copa América 2021 y el{' '}
							<span className={highlightText}>Mundial Qatar 2022</span>. A
              menudo se lo ha comparado con otros grandes futbolistas como Diego
              Maradona y Pelé, y su habilidad para controlar el balón y marcar
              goles lo han convertido en un{' '}
							<span className={highlightText}>
                jugador de culto en todo el mundo
							</span>
              .
						</p>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Biography;
