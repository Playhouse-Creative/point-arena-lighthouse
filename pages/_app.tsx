import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Livvic, Spectral } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

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
		<><input type='hidden' name='form-name' value='contact' />
			<Hydrated>
				<main className={` ${spectral.variable} ${livvic.variable}`}>
					<Component {...pageProps} />
				</main>
			</Hydrated>
		</>
	)
}
export default MyApp

const Hydrated = ({ children }: { children?: any }) => {
	const [hydration, setHydration] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHydration(true)
		}
	}, [])
	return hydration ? children : null
}
