import Link from "next/link"

type Props = {}

export default function Footer({}: Props) {
	return (
		<div>
			<div className="z-30 m-0 flex md:flex-row flex-col h-full w-screen py-12 bg-[url('/footer-circle-pattern.svg')] bg-cover bg-no-repeat p-0">
				<div className='w-screen mx-10 md:ml-12 md:w-1/4'>
					<h4 className='text-xl text-white underline underline-offset-2'>
						Hours:
					</h4>
					<p className='text-sm font-semibold text-white md:text-lg'>Memorial Day through Labor Day</p>
					<p className='text-sm text-white md:text-lg'>10am - 4:30pm</p>
					<p className='text-sm font-semibold text-white md:text-lg'>Rest of the year</p>
					<p className='text-sm text-white md:text-lg'>10am - 3:30pm</p>
					<p className='text-sm text-white md:text-lg'>Closed Thanksgiving & Christmas Days</p>
					<p className='text-sm text-white md:text-lg'>Closed at 1 p.m. Christmas Eve</p>
					<h4 className='mt-4 text-xl text-white underline  underline-offset-2'>
						Admission Prices:
					</h4>
					<p className='mt-2 text-lg text-white underline'>
						Site Visit Fee
					</p>
					<div className='flex justify-between w-2/3'>
						<p className='text-sm text-white md:text-lg'>Members and Children under 12</p>
						<p className='text-sm text-white md:text-lg'>Free</p>
					</div>
					<div className='flex justify-between w-2/3'>
						<p className='text-sm text-white md:text-lg'>12 and over</p>
						<p className='text-sm text-white md:text-lg'>$5</p>
					</div>
					<p className='mt-2 text-sm text-white underline md:text-lg'>
						Tower Tour (in addition to site visit fee)
					</p>
					<div className='flex justify-between w-2/3'>
						<p className='text-sm text-white md:text-lg'>4 and over</p>
						<p className='text-sm text-white md:text-lg'>$5</p>
					</div>
				</div>
				<div className='w-screen mx-10 mt-10 md:ml-12 md:w-1/4'>
					<h4 className='text-xl text-white underline underline-offset-2'>
						Phone:
					</h4>
					<p className='mt-2 text-lg text-white'>
						877-725-4448, ext. 1 or
					</p>
					<p className='text-sm text-white md:text-lg'>707-882-2809, ext. 1</p>
					<h4 className='mt-4 text-xl text-white underline underline-offset-2'>
						Email:
					</h4>
					<p className='mt-2 text-sm text-white md:text-lg'>
						info.palight@gmail.com
					</p>
					<h4 className='mt-4 text-sm text-white underline md:text-xl underline-offset-2'>
						Address:
					</h4>
					<p className='mt-2 text-sm text-white md:text-lg'>
						45500 Lighthouse Road
					</p>
					<p className='mt-2 text-sm text-white md:text-lg'>P. O. Box 11</p>
					<p className='text-sm text-white  md:text-lg'>Point Arena, CA 95468</p>
				</div>
				<div className='w-screen mx-10 mt-10 md:ml-12 md:w-1/4'>
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
