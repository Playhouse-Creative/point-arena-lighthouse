import 'styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppProps } from 'next/app'
import { Livvic, Spectral } from 'next/font/google'
import { lazy } from 'react'

const livvic = Livvic({
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-livvic',
})
const spectral = Spectral({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-spectral',
})

const PreviewProvider = lazy(() => import('components/preview/PreviewProvider'))

export default function App({ Component, pageProps }: AppProps) {
  const { draftMode, token } = pageProps
  return (
    <>

      <main className={` ${spectral.variable} ${livvic.variable}`}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}</main>
      </>
  )
}