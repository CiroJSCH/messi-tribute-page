import './globals.css';

import { Poppins } from 'next/font/google';

export const metadata = {
	title: 'Lionel Messi Tribute',
	description: 'Sitio generado con Next.JS. Tarea de Programación III',
	authors: [{name: 'Ciro Schapert'}],
	icons: {
		icon: '/icon.ico',
	},
};

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
});

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="es">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
