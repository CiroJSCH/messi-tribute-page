import Trophies from './sections/Trophies';
import Teams from './sections/Teams';
import Navigation from './sections/Navigation';
import Highlights from './sections/Highlights';
import Biography from './sections/Biography';
import Banner from './sections/Banner';

export default function Home() {
	return (
		<>
			<header className='overflow-x-hidden'>
				<Navigation />
				<Banner />
			</header>
			<main className='main-background'>
				<Biography />
				<Teams />
				<Trophies />
				<Highlights />
			</main>
		</>
	);
}
