import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Livvic, Spectral } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { lazy } from 'react'

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

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

function MyApp({ 
	Component,
	pageProps,
}: AppProps<{
	draftMode: boolean
	token: string
}>) {
	const { draftMode, token } = pageProps
	return (
		<>
			<Hydrated>
				<main className={` ${spectral.variable} ${livvic.variable}`}>
					{draftMode ? (
						<PreviewProvider token={token}>
							<Component {...pageProps} />
						</PreviewProvider>
					) : (
						<Component {...pageProps} />
					)}
				</main>
			</Hydrated>
			{/* form for netlify */}
			<form
				name='contact'
				method='POST'
				data-netlify='true'
				netlify-honeypot='bot-field'
				className='hidden'
			><input type='hidden' name='form-name' value='contact' /><input
					type='text'
					name='first-name'
					id='first-name'
					autoComplete='given-name'
				/><input
					type='text'
					name='last-name'
					id='last-name'
					autoComplete='family-name'
				/><input
					id='email'
					name='email'
					type='email'
					autoComplete='email'
				/><textarea
					id='message'
					name='message'
					rows={4}
					defaultValue={''}
				/></form>
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
