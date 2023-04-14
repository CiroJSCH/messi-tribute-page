import './globals.css';

export const metadata = {
	title: 'Lionel Messi Tribute',
	description: 'Sitio generado con Next.JS. Tarea de Programación III',
	authors: [{name: 'Ciro Schapert'}],
	icons: {
		icon: '/icon.ico',
	},
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
