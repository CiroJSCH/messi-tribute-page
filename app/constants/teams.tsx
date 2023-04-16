import psg from '@images/images/psg.png';
import barcelona from '@images/images/barcelona.png';
import argentina from '@images/images/argentina.png';

const teams = [
	{
		name: 'FC Barcelona',
		image: barcelona.src,
		gradient: 'psg-gradient',
		description: 'Llegó al FC Barcelona en 2004. Se convirtió en un ícono del club y del fútbol mundial debido a su habilidad excepcional en el campo, su liderazgo y su dedicación. Su técnica de regate y su capacidad para anotar goles impresionantes lo convirtieron en uno de los jugadores más temidos en todo el mundo.',
		position: 'lg:col-start-1',
	},
	{
		name: 'Paris Saint Germain',
		image: psg.src,
		gradient: 'barcelona-gradient',
		description: 'LLegó al PSG en Agosto de 2021 proveniente del Barcelona como agente libre, firmando un contrato durante dos años. Desde entonces se encuentra jugando en el club.',
		position: 'lg:col-start-2 xl:col-start-2',
	},
	{
		name: 'Selección Argentina',
		image: argentina.src,
		gradient: 'argentina-gradient',
		description: 'Messi debutó con la selección argentina en 2005 y desde entonces ha representado a su país en cinco Copas del Mundo y cinco Copas América. Además, ha sido fundamental en la selección, convirtiendose en el jugador con mas participaciones, asistencias y goles en la historia de la selección.',
		position: 'lg:col-start-3 xl:col-start-3',
	},
];

export default teams;

