import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import ContactForm from './sections/sectionComponents/ContactForm'

type Props = {
	title: string
	description: string
	children: any
}

const PageLayout = (props: Props) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NextSeo
				title={props.title}
				description={props.description}
				openGraph={{
					url: 'https://www.pointarenalighthouse.com',
					locale: 'en_IE',
					type: 'website',
					title: `${props.title}`,
					description: `${props.description}`,
					images: [
						{
							url: 'https://www.pointarenalighthouse.com/logoRibbon.png',
							width: 800,
							height: 600,
							alt: 'Point Arena Lighthouse',
							type: 'image/png',
						},
					],
					site_name: 'Point Arena Lighthouse',
				}}
			/>
			<div className='h-full overflow-x-hidden'>
				<Navbar />
				<div className="mt-[160px]  bg-[url('/topography-background.svg')]">
					{props.children}
					<ContactForm/>
				</div>
				<Footer />
			</div>
		</>
	)
}
export default PageLayout
