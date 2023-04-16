import supercopaFrancia from '@images/images/trophies/supercopaFrancia.png';
import supercopaEuropa from '@images/images/trophies/supercopaEuropa.png';
import supercopaEspana from '@images/images/trophies/supercopaEspaña.png';
import mundialSub from '@images/images/trophies/mundialSub20.png';
import mundialClubes from '@images/images/trophies/mundialClubes.png';
import mundial from '@images/images/trophies/mundial.png';
import juegosOlimpicos from '@images/images/trophies/medallaOro.png';
import ligueOne from '@images/images/trophies/ligue1.png';
import laLiga from '@images/images/trophies/liga.png';
import finalissima from '@images/images/trophies/finalissima.png';
import copaDelRey from '@images/images/trophies/copaDelRey.png';
import copaAmerica from '@images/images/trophies/copaAmerica.png';
import champions from '@images/images/trophies/champions.png';


export const barcelonaTrophies = [
	{
		title: 'Champions League',
		amount: 4,
		image: champions.src,
		years: ['2005/06', '2008/09', '2010/11', '2014/15'],
	},
	{
		title: 'La Liga',
		amount: 10,
		image: laLiga.src,
		years: [
			'2004/05',
			'2005/06',
			'2008/09',
			'2009/10',
			'2010/11',
			'2012/13',
			'2014/15',
			'2015/16',
			'2017/18',
			'2018/19',
		],
	},
	{
		title: 'Copa del Rey',
		amount: 4,
		image: copaDelRey.src,
		years: [
			'2008/09',
			'2011/12',
			'2014/15',
			'2015/16',
			'2016/17',
			'2017/18',
			'2020/21',
		],
	},
	{
		title: 'Mundial de Clubes',
		amount: 3,
		image: mundialClubes.src,
		years: ['2009', '2011', '2015'],
	},
	{
		title: 'Supercopa de Europa',
		amount: 3,
		image: supercopaEuropa.src,
		years: ['2009/10', '2011/12', '2015/16'],
	},
	{
		title: 'Supercopa de España',
		amount: 8,
		image: supercopaEspana.src,
		years: [
			'2005/06',
			'2006/07',
			'2009/10',
			'2010/11',
			'2011/12',
			'2013/14',
			'2016/17',
			'2018/19',
		],
	},
];

export const parisTrophies = [
	{
		title: 'Ligue 1',
		amount: 1,
		image: ligueOne.src,
		years: ['2021/22'],
	},
	{
		title: 'Supercopa de Francia',
		amount: 1,
		image: supercopaFrancia.src,
		years: [
			'2022/23',
		],
	},
];

export const argentinaTrophies = [
	{
		title: 'Copa América',
		amount: 1,
		image: copaAmerica.src,
		years: ['2021'],
	},
	{
		title: 'Mundial Sub-20',
		amount: 1,
		image: mundialSub.src,
		years: [
			'2005',
		],
	},
	{
		title: 'Juegos Olímpicos',
		amount: 1,
		image: juegosOlimpicos.src,
		years: [
			'2008',
		],
	},
	{
		title: 'Mundial',
		amount: 1,
		image: mundial.src,
		years: [
			'2022',
		],
	},
	{
		title: 'Finalissima',
		amount: 1,
		image: finalissima.src,
		years: [
			'2022',
		],
	},
];