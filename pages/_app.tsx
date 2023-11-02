import 'styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppProps } from 'next/app'
import { Livvic, Spectral } from 'next/font/google'
import { useEffect, useState } from 'react'
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
      <Hydrated>
      <main className={` ${spectral.variable} ${livvic.variable}`}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}</main>
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

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : null
}