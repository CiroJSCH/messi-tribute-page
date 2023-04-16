'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import useMediaQuery from '../hooks/useMediaQuery';
import MobileMenu from '../components/header/MobileMenu';

const listItemStyle = 'w-[125px] text-center hover:text-blue cursor-pointer transition text-[14px] md:text-[16px] lg:text-[20] xl:text-[20px] tracking-[1.15px]';

const Navigation = () => {

	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const [isOnTop, setIsOnTop] = useState(true);

	const changeNavBg = () => {
		window.scrollY <= 60 ? setIsOnTop(true) : setIsOnTop(false);
	 };
 
	 useEffect(() => {
		 window.addEventListener('scroll', changeNavBg);
		 return () => {
			 window.removeEventListener('scroll', changeNavBg);
		 };
	 }, []);
 

	return (
		<nav className={`fixed z-[100] h-auto p-4 w-full sm:py-6 transition-[background] duration-300 ${isOnTop ? 'bg-transparent' : 'bg-black border-b border-b-blue'}`}>
			<div className='w-full max-w-[1440px] mx-auto flex justify-between'>
				<section className='w-[60px] h-[60px] relative sm:hidden flex flex-col items-center'>
					<Image src="/images/logo.png" alt="logo" fill className='absolute'/>					
				</section>
				<MobileMenu />
				<ul className='hidden sm:flex items-center justify-around text-white uppercase font-medium w-full'>
					<li className={listItemStyle}>Biografía</li>
					<li className={listItemStyle}>Equipos</li>
					<li className='relative w-[80px] lg:w-[110px] h-[80px] lg:h-[110px] hover:bg-gold transition ease-in-out duration-300 border rounded-full grid place-content-center'>
						<Image src="/images/logo2.png" alt="logo" width={isDesktop ? 60 : 40} height={isDesktop ? 60 : 40} />
					</li>
					<li className={listItemStyle}>Trofeos</li>
					<li className={listItemStyle}>Destacados</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;