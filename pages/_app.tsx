import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Livvic, Spectral } from 'next/font/google'
import type { AppProps } from 'next/app'


const livvic = Livvic({
	weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
	subsets: ['latin'],
	variable: '--font-livvic',
})
const spectral = Spectral({
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: '--font-spectral',
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			
				<main className={` ${spectral.variable} ${livvic.variable}`}>
					<Component {...pageProps} />
				</main>
			
		</>
	)
}
export default MyApp


