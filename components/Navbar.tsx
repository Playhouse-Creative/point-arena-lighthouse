'use client'
import Link from 'next/link'
import Img from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
	routes: [
		{ name: 'Lodging', href: '/lodging' },
		{ name: 'Visit', href: '/visit' },
		{ name: 'About', href: '/about' },
		{ name: 'Support Us', href: '/support' },
		{ name: 'Blog', href: '/blog' },
	],
	hours: [
		{ name: 'Office', hours: '8:00AM – 4:00PM Monday-Friday' },
		{ name: 'Attic Thrift Store', hours: '9:00AM – 3:00PM Monday-Friday' },
		{ name: 'Bus Available', hours: '8:00AM – 3:00PM Monday-Friday' },
		{ name: 'Lunch', hours: '11:30AM – 1:30PM Monday-Friday' },
	],
	legal: [
		{ name: 'Claim', href: '#' },
		{ name: 'Privacy', href: '#' },
		{ name: 'Terms', href: '#' },
	],
	social: [
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/PointArenaLighthouse/',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
}

export default function Navbar() {
	return (
		<>
			<Disclosure
				as='nav'
				className="fixed z-50 m-0 flex h-[160px] w-screen flex-col bg-[url('/menuBackground.png')] bg-cover bg-no-repeat p-0">
				{({ open }) => (
					<>
						<div
							className={`${
								open ? 'scale-50' : null
							}  absolute top-0 z-30 m-0 origin-top-left transition duration-200 ease-in-out md:ml-12 xl:ml-36`}>
							<Link href='/'>
								<Img
									src='/logoRibbon.png'
									alt='Logo Image'
									height={245}
									width={220}
								/>
							</Link>
						</div>
						<div className='flex justify-end mb-4 mr-4 '>
							<div className='flex items-center justify-end mt-8 sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block w-8 h-8'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block w-8 h-8'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-col hidden mr-2 sm:flex sm:w-8/12 md:w-7/12 md:mr-12 lg:w-7/12 xl:mr-36 xl:w-5/12'>
								<div className='flex items-center self-end mt-4 space-x-4'>
									{navigation.social.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='text-white hover:text-white'>
											<span className='sr-only'>
												{item.name}
											</span>
											<item.icon
												className='w-6 h-6'
												aria-hidden='true'
											/>
										</a>
									))}
									<form
										action='https://www.paypal.com/cgi-bin/webscr'
										method='post'
										target='_blank'>
										<button
											name='submit'
											className='self-end px-6 py-2 font-serif text-xl font-medium tracking-wider text-white border border-transparent rounded-lg shadow-xl bg-pa-red-4 hover:bg-pa-red-3'>
											Donate
											<input
												type='hidden'
												name='cmd'
												value='_s-xclick'
											/>
											<input
												type='hidden'
												name='hosted_button_id'
												value='6QKQH85M4HFK8'
											/>
										</button>
									</form>
								</div>

								<ul className='z-40 flex justify-between mt-6 h-1/3'>
									{navigation.routes.map((link, i) => (
										<li key={i}>
											<Link href={link.href}>
												<p className='font-serif text-sm font-semibold text-white lg:text-xl'>
													{link.name}
												</p>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<Transition
							origin-class='origin-right'
							show={open}
							enter='transition duration-75 transform'
							enterFrom='opacity-0 scale-x-0'
							enterTo='opacity-100 scale-x-100'
							leave='transition duration-150 transform'
							leaveFrom='opacity-100 scale-x-100'
							leaveTo='opacity-0 -scale-x-0'
							className='z-40 flex flex-col items-center mt-8 origin-right bg-white md:hidden'>
							<Disclosure.Panel>
								<div className='space-y-4'>
									{navigation.routes.map((link, i) => (
										<Link key={i} href={link.href}>
											<Disclosure.Button className='block w-screen py-2 pl-3 pr-4 mx-auto text-base font-medium text-gray-500 border-2 border-l-4 border-transparent border-b-gray-200 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
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
