interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
	return <h2 className="font-marker text-[35px] md:text-[40px] lg:text-[48px] text-gradient-blue uppercase tracking-[1.25px] lg:tracking-[1.4px]">{title}</h2>;
};

export default SectionTitle;
