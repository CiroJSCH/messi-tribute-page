'use client';

import { HiChevronDoubleDown } from 'react-icons/hi';

const ScrollDownButton = () => {

	const scrollDown = () => {
		window.scroll(0, window.scrollY + window.innerHeight);
	};

	return (
		<div className='animate-bounce cursor-pointer flex items-center justify-center rounded-full bg-blue w-[50px] h-[50px] absolute bottom-10' onClick={scrollDown}>
			<HiChevronDoubleDown size={30}/>
		</div>
	);
};

export default ScrollDownButton;