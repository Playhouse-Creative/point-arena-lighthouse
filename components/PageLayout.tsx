import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { NextSeo } from "next-seo";


type Props={
	title: string
	description: string
	children: any
}


const PageLayout = (props: Props) =>  {
	return (
		<>
			<Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<NextSeo
                title={props.title}
                description={props.description}
                openGraph={{
                    url: "https://www.pointarenalighthouse.com",
                    locale: "en_IE",
                    type: "website",
                    title: `${props.title}`,
                    description: `${props.description}`,
                    images: [
                        {
                            url: "https://www.pointarenalighthouse.com/logoRibbon.png",
                            width: 800,
                            height: 600,
                            alt: "Point Arena Lighthouse",
                            type: "image/png",
                        },
                    ],
                    site_name: "Point Arena Lighthouse",
                }}
            />
			<div className='overflow-x-hidden h-full'>
				<Navbar />
				<div className="bg-[url('/topography-background.svg')] mt-[160px]">
				{props.children}</div>
				<Footer/>
			</div>
			</>
	)
}
export default PageLayout;