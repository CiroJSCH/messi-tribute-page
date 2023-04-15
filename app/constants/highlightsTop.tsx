import recordGoles from '@images/images/recordDeGoles.jpg';
import golEnBernabeu from '@images/images/golEnBernabeu.jpg';
import golContraMu from '@images/images/golContraMU.jpg';
import campeonDelMundo from '@images/images/campeonDelMundo.jpg';
import campeonCopaAmerica from '@images/images/campeonCopaAmerica.jpg';

const highlightsTop = [
	{
		title: 'Campeón del mundo',
		image: campeonDelMundo.src,
		size: 'col-span-12 md:col-span-6 md:row-start-1 md:row-end-3',
		link: 'https://www.youtube.com/watch?v=a19jwBMcObs',
		description: 'En su quinto mundial, recibió el Balón de Oro al mejor jugador del Mundial Qatar 2022, después de consagrarse campeón con la victoria por penales ante Francia (4-2) en el Estadio Lusail.',
	},
	{
		title: 'Campeón de América',
		image: campeonCopaAmerica.src,
		size: 'col-span-12 sm:col-span-6 md:col-span-6 lg:row-start-1 lg:row-end-3',
		link: 'https://www.youtube.com/watch?v=pU89OpwBgOc',
		description: 'Argentina logró su primer título después de 28 años ante Brasil y lo hizo en el Maracaná, al vencerlo por 1-0 en la final de la CONMEBOL Copa América.',
	},
	{
		title: 'Silenciando el Bernabeu',
		image: golEnBernabeu.src,
		size: 'col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4',
		link: 'https://www.youtube.com/watch?v=lQi_Vyruzwk',
		description: 'En el clásico español de 2017, Messi marcó un gol al minuto 93 para darle la victoria al Barcelona y devolverlo a la pelea por el título de Liga, enseñando su dorsal a todo el estadio.',
	},
	{
		title: 'Final Champions League',
		image: golContraMu.src,
		size: 'col-span-12 sm:col-span-6 lg:col-span-4',
		link: 'https://www.youtube.com/watch?v=uSRBmsQaBTI',
		description: 'En la final de Champions de 2009 contra Manchester United, Messi, pese a su baja estatura, logró realizar un icónico gol de cabeza para ganar el trofeo ante el equipo de CR7.',
	},
	{
		title: '91 Goles en un año',
		image: recordGoles.src,
		size: 'col-span-12 sm:col-span-6 lg:col-span-4',
		link: 'https://www.youtube.com/watch?v=0diLypIMGWQ',
		description: 'Lionel Messi batió todos los records en 2012 cuando marcó 91 goles en 69 partidos en un año calendario. Además, repartió 24 asistencias.',
	},
];

export default highlightsTop;