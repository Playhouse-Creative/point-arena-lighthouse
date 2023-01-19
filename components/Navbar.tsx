'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
	{ name: 'Lodging', href: '/lodging' },
	{ name: 'Visit', href: '/visit' },
	{ name: 'About', href: '/about' },
	{ name: 'Support Us', href: '/support' },
	{ name: 'Blog', href: '/blog' },
]

export default function Navbar() {
	return (
		<>
			<Disclosure
				as='nav'
				className="fixed z-30 m-0 flex h-[160px] w-screen flex-col bg-[url('/menuBackground.png')] bg-cover bg-no-repeat p-0">
				{({ open }) => (
					<>
						<div
							className={`${
								open ? 'scale-50' : null
							} lg:-24 absolute top-0 z-30 m-0 origin-top-left transition duration-200 ease-in-out md:ml-12 xl:ml-36`}>
							<Link href='/'>
								<Image
									src='/logoRibbon.png'
									alt='Logo Image'
									height='245'
									width='220'
								/>
							</Link>
						</div>
						<div className='mr-4 mb-4 flex justify-end '>
							<div className='mt-8 flex items-center justify-end sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-8 w-8'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-8 w-8'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='lg:-24 hidden flex-col sm:flex sm:w-8/12 md:mr-12 lg:w-7/12 xl:mr-36 xl:w-1/3'>
								<button className='mt-4  inline-flex items-center justify-center self-end rounded-lg border border-transparent bg-pa-red-4 px-6 py-2 font-serif text-xl font-medium tracking-wider text-white shadow-xl hover:bg-pa-red-3'>
									Donate
								</button>
								<ul className='z-40 mt-6 flex h-1/3 justify-between'>
									{links.map((link, i) => (
										<li key={i}>
											<Link href={link.href}>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													{link.name}
												</p>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<Transition
						origin-class="origin-right"
							show={open}
							enter='transition duration-75 transform'
							enterFrom='opacity-0 scale-x-0'
							enterTo='opacity-100 scale-x-100'
							leave='transition duration-150 transform'
							leaveFrom='opacity-100 scale-x-100'
							leaveTo='opacity-0 -scale-x-0'
							className='z-40 mt-8 flex flex-col origin-right items-center bg-white md:hidden'>
							<Disclosure.Panel >
								<div className='space-y-4'>
									{links.map((link, i) => (
										<Link key={i} href={link.href}>
											<Disclosure.Button className='mx-auto block w-screen border-2 border-l-4 border-transparent border-b-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
												<p className='font-serif text-lg font-semibold md:text-xl '>
													{link.name}
												</p>
											</Disclosure.Button>
										</Link>
									))}
								</div>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</>
	)
}
