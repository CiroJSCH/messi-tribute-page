'use client';

import { MdSportsSoccer } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiFillStar, AiFillTrophy } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const listItemStyle =
  'flex items-center gap-5 text-gradient-gold uppercase text-[22px] font-medium tracking-[1.25px]';

const MobileMenu = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const toggleMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};
	return (
		<>
			<div
				className="rounded-full z-[500] right-2 top-6 absolute sm:hidden"
				onClick={toggleMenu}
			>
				<div
					className={`${
						isOpenMenu ? 'rotate-180' : 'rotate-0'
					} text-gold transition-transform duration-300 ease-in-out text-[42px]`}
				>
					{isOpenMenu ? <IoMdClose /> : <BiMenuAltRight />}
				</div>
			</div>
			<section
				className={`glassmorphism fixed right-0 top-0 flex flex-col w-[70%] h-screen z-[400] border-l border-l-gold lg:hidden ${
					isOpenMenu ? 'translate-x-0' : 'translate-x-[100%]'
				} ease-in-out duration-300`}
			>
				<div className="flex flex-col gap-5 justify-center w-full items-center px-4 h-[75%]">
					<Image
						src="/images/logo.png"
						alt="messi logo"
						width={80}
						height={80}
					/>
					<ul className='flex flex-col gap-7 mt-10'>
						<li>
							<Link href="#biografia" className={listItemStyle}>
								<BsFillPersonFill className="text-white" size={30} />
								<span>Biografía</span>
							</Link>
						</li>
						<li>
							<Link href="#clubes" className={listItemStyle}>
								<MdSportsSoccer className="text-white" size={30} />
								<span>Clubes</span>
							</Link>
						</li>
						<li>
							<Link href="#trofeos"  className={listItemStyle}>
								<AiFillTrophy className="text-white" size={30} />
								<span>Trofeos</span>
							</Link>
						</li>
						<li>
							<Link href="#destacados" className={listItemStyle}>
								<AiFillStar className="text-white" size={30} />
								<span>Destacados</span>
							</Link>
						</li>
					</ul>
					<span className='text-neutral-600 text-[15px] mt-10 absolute bottom-5'>
						Desarrollado por Ciro Schapert
					</span>
				</div>
			</section>
		</>
	);
};

export default MobileMenu;
