import { Poppins } from 'next/font/google';

import Navigation from './sections/Navigation';
import Banner from './sections/Banner';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
});

export default function Home() {
	return (
		<header className='overflow-x-hidden'>
			<Navigation />
			<Banner />
		</header>
	);
}
