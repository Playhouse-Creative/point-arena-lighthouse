import Navbar from './navbar'
import Footer from './footer'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head/>
			<body className='overflow-x-hidden h-full'>
				<Navbar />
				{children}
				<Footer/>
			</body>
		</html>
	)
}
