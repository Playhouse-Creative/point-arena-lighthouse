import * as demo from 'lib/demo.data'
import Head from 'next/head'


/**
 * All the shared stuff that goes into <head> on `(personal)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
export function SiteMeta({
  baseTitle,
  description,
  image,
  title,
}: {
  baseTitle?: string
  description?: string
  image: string
  title?: string
}) {
  const metaTitle = [
    ...(title ? [title] : []),
    ...(baseTitle ? [baseTitle] : []),
  ].join(' | ')


  return (
    <Head>
      <title>{metaTitle || demo.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      <meta property="og:image" content={image} />
    </Head>
  )
}
