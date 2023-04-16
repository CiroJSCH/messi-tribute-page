const Footer = () => {
	return (
		<footer className="pb-[15px] bg-black">
			<div className="bg-black border-t-2 border-t-gold py-3" />
			<section className="py-4 px-1 gold-gradient">
				<p className="text-black font-medium text-center uppercase">
          © {new Date().getFullYear()} | Desarrollado por Ciro Schapert
				</p>
			</section>
			<div className="bg-black border-b-2 border-b-gold py-3" />
		</footer>
	);
};

export default Footer;
