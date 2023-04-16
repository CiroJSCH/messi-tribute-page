import { HiChevronDoubleDown } from 'react-icons/hi';
import Link from 'next/link';

const ScrollDownButton = () => {

	return (
		<Link href="#biography" className='animate-bounce cursor-pointer flex items-center justify-center rounded-full bg-blue w-[50px] h-[50px] absolute bottom-14 z-[7]'>
			<HiChevronDoubleDown size={30}/>
		</Link>
	);
};

export default ScrollDownButton;