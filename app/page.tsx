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
				<Highlights />
			</main>
		</>
	);
}
