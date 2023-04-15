'use client';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ItemProps {
  image: string;
  title: string;
  size: string;
  index: number;
  link: string;
  description: string;
}

const Item = ({image, title, size, index, link, description}: ItemProps) => {

	const [isFocus, setIsFocus] = useState(false);

	const toggleFocus = () => setIsFocus(prev => !prev);

	return (
		<li onClick={toggleFocus} className={`relative rounded-md ${size}`}>
			<Image src={image} fill alt={title} className='absolute rounded-md object-cover z-[4]' />
			<section className={`h-full w-full p-3 pb-6 flex flex-col items-center justify-center text-center absolute z-[5] transition-[opacity] duration-200 ease-in-out ${isFocus ? 'bg-[rgba(0,0,0,0.8)] opacity-1' : 'bg-transparent opacity-0'}`}>
				<div className='p-2 bg-gold border bottom-2 xl:bottom-3 left-2 xl:left-3 grid place-content-center w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] rounded-full absolute'>
					<span className='font-marker text-white text-[23px] md:text-[25px] xl:text-[27px]'>0{index+1}</span>
				</div>
				<h3 className='text-blue uppercase text-[18px] lg:text-[20px] xl:text-[22px] font-medium'>{title}</h3>
				<p className='text-white text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] text-center mt-2 mb-3'>{description}</p>
				<Link href={link} target='_blank' className='absolute bottom-2 xl:bottom-4 right-2 xl:right-4 flex gap-2 items-center cursor-pointer group'>
					<AiFillPlayCircle className='text-blue group-hover:text-gold transition-colors text-[20px] xl:text-[24px]'/>
					<p className='text-white uppercase xl:text-[18px] tracking-[1.15px]'>Ver</p>
				</Link>
			</section>
		</li>
	);
};

export default Item;