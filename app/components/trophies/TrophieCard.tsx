import Image from 'next/image';

interface TrophieCardProps {
  title: string;
  amount: number;
  image: string;
  years: string[];
}

const TrophieCard = ({ amount, image, title, years }: TrophieCardProps) => {
	return (
		<li className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3 h-auto rounded-md triangle-gradient relative border pb-4">
			<span className="absolute top-2 left-2 font-marker text-[27px]">{amount}</span>
			<section className='px-5 flex flex-col items-center mt-5'>
				<div className='relative w-[95px] h-[155px]'>
					<Image src={image} alt={title} fill className='object-contain'/>
				</div>
				<p className='text-blue text-[17px] mt-4 uppercase font-semibold text-center'>{title}</p>
				<div className='flex flex-wrap gap-2 mt-3 items-center justify-center h-[95px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue'>
					{
						years.map(year => (
							<span key={year} className='min-w-[82px] text-white gold-gradient p-2 text-center rounded-lg'>{year}</span>
						))
					}
				</div>
			</section>
		</li>
	);
};

export default TrophieCard;
