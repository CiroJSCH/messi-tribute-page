import Image from 'next/image';

import ScrollDownButton from '../components/header/ScrollDownButton';

const Banner = () => {
	return (
		<section className="relative h-screen w-screen">
			<div className="absolute w-full h-full bg-[url('/images/banner.jpg')] bg-center z-[1]"/>
			<div className='absolute bg-[rgba(0,0,0,0.9)] w-full h-full z-[2]'/>
			<div className='z-[3] relative w-full h-full text-white flex flex-col justify-center items-center px-3 whitespace-nowrap'>
				<h1 className='font-marker text-[48px] sm:text-[52px] lg:text-[62px] mb-5'>Lionel Messi</h1>
				<p className='text-[18px] sm:text-[20px] lg:text-[27px] font-[500]'>THE G.O.A.T</p>
				<p className='mt-1 text-gradient-gold uppercase text-[27px] sm:text-[30px] lg:text-[40px] tracking-[1.45px] font-[600]'>Greatest Of All Times</p>
				<Image className='mt-8' src="/images/logo.png" alt="Messi Logo" width="200" height="200"/>
				<ScrollDownButton />
			</div>
		</section>
	);
};

export default Banner;