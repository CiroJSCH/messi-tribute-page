import Image from 'next/image';

import ScrollDownButton from '../components/header/ScrollDownButton';

const Banner = () => {
	return (
		<section id='home' className="relative h-screen w-screen">
			<div className="absolute w-full h-full bg-[url('/images/banner.jpg')] bg-center z-[1]"/>
			<div className='absolute bg-[rgba(0,0,0,0.9)] w-full h-full z-[2]'/>
			<div className='z-[3] relative w-full h-full text-white flex flex-col justify-center items-center px-3 whitespace-nowrap'>
				<h1 className='font-marker text-[48px] sm:text-[52px] lg:text-[62px] mb-5'>Lionel Messi</h1>
				<p className='italic text-[18px] sm:text-[20px] lg:text-[24px] font-[500]'>THE G.O.A.T</p>
				<p className='text-ita mt-3 sm:mt-4 md:mt-5 text-gradient-gold uppercase text-[22px] sm:text-[30px] lg:text-[40px] tracking-[1.45px] font-[600]'>Greatest Of All Times</p>
				<Image className='mt-8 lg:mt-10' src="/images/logo.png" alt="Messi Logo" width="200" height="200"/>
				<ScrollDownButton />
			</div>
			<Image src='/images/signature.svg' alt='messi signature' width={200} height={50} className='absolute bottom-4 left-4 z-[2] invert'/>
		</section>
	);
};

export default Banner;