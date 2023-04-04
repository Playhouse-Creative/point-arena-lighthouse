import Link from "next/link"

type Props = {}

export default function Footer({}: Props) {
	return (
		<div>
			<div className="z-30 m-0 flex md:flex-row flex-col h-full w-screen py-12 bg-[url('/footer-circle-pattern.svg')] bg-cover bg-no-repeat p-0">
				<div className='mx-10 md:ml-12 w-screen md:w-1/4'>
					<h4 className='text-xl text-white underline underline-offset-2'>
						Hours:
					</h4>
					<p className='text-lg text-white font-semibold'>Memorial Day through Labor Day</p>
					<p className='text-lg text-white'>10am - 4pm</p>
					<p className='text-lg text-white font-semibold'>Rest of the year</p>
					<p className='text-lg text-white'>10am - 3:30pm</p>
					<h4 className=' mt-4 text-xl text-white underline underline-offset-2'>
						Admission Prices:
					</h4>
					<p className='mt-2 text-lg text-white underline'>
						Site Visit
					</p>
					<div className='flex justify-between w-1/2'>
						<p className='text-lg text-white'>Children under 12</p>
						<p className='text-lg text-white'>Free</p>
					</div>
					<div className='flex justify-between w-1/2'>
						<p className='text-lg text-white'>12 and over</p>
						<p className='text-lg text-white'>$5</p>
					</div>
					<p className='mt-2 text-lg text-white underline'>
						Tower Tour
					</p>
					<div className='flex justify-between w-1/2'>
						<p className='text-lg text-white'>6 and over</p>
						<p className='text-lg text-white'>$5</p>
					</div>
				</div>
				<div className='mx-10 md:ml-12 w-screen md:w-1/4 mt-10'>
					<h4 className='text-xl text-white underline underline-offset-2'>
						Phone:
					</h4>
					<p className='mt-2 text-lg text-white'>
						877-725-4448, ext. 1 or
					</p>
					<p className='text-lg text-white'>707-882-2809, ext. 1</p>
					<h4 className='mt-4 text-xl text-white underline underline-offset-2'>
						Email:
					</h4>
					<p className='mt-2 text-lg text-white'>
						info.palight@gmail.com
					</p>
					<h4 className='mt-4 text-xl text-white underline underline-offset-2'>
						Address:
					</h4>
					<p className='mt-2 text-lg text-white'>
						45500 Lighthouse Road
					</p>
					<p className=' text-lg text-white'>Point Arena, CA 95468</p>
				</div>
				<div className='mx-10 md:ml-12 w-screen md:w-1/4 mt-10'>
					<Link href='/lodging'><h4 className='mb-4 text-xl text-white'>Lodging</h4></Link>
					<Link href='/visit'><h4 className='mb-4 text-xl text-white'>Visit</h4></Link>
					<Link href='/about'><h4 className='mb-4 text-xl text-white'>About</h4></Link>
					<Link href='/support'><h4 className='mb-4 text-xl text-white'>Support</h4></Link>
					<Link href='/blog'><h4 className='mb-4 text-xl text-white'>Blog</h4></Link>
					<Link href='/about/#careers'><h4 className='mb-4 text-xl text-white'>Careers</h4></Link>
					<Link href='/policies'><h4 className='mb-4 text-xl text-white'>Policies</h4></Link>
				</div>
				<div className='w-1/4'></div>
			</div>
            <div className="w-screen h-10 bg-pa-teal-4"></div>
		</div>
	)
}
