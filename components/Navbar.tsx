'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'


export default function Navbar() {
	return (
		<>
			<Disclosure
				as='nav'
				className="fixed z-30 m-0 flex h-[160px] w-screen flex-col bg-[url('/menuBackground.png')] bg-cover bg-no-repeat p-0">
				{({ open }) => (
					<>
						<div className='absolute top-0 m-0 md:ml-12 z-30'>
							<Link href='/'>
								<Image
									src='/logoRibbon.png'
									alt='Logo Image'
									height='245'
									width='220'
								/>
							</Link>
						</div>
						<div className='mr-4 mb-4 flex justify-end md:mr-12'>
							
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
								<div className='hidden flex-col sm:flex sm:w-8/12 lg:w-7/12 xl:w-5/12'>
									<button className='mt-6 w-auto self-end rounded-lg bg-pa-red-4 px-8 py-2 font-serif font-medium tracking-wider text-white shadow-xl'>
										Donate
									</button>
									<ul className='mt-6 flex h-1/3 justify-between'>
										<li>
											<Link href='/lodging'>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													Lodging
												</p>
											</Link>
										</li>
										<li>
											<Link href='/visit'>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													Visit
												</p>
											</Link>
										</li>
										<li>
											<Link href='/about'>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													About
												</p>
											</Link>
										</li>
										<li>
											<Link href='/support'>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													Support Us
												</p>
											</Link>
										</li>
										<li>
											<Link href='/blog'>
												<p className='font-serif text-sm font-semibold text-white md:text-xl'>
													Blog
												</p>
											</Link>
										</li>
									</ul>
								</div>
							
						</div>
						<Disclosure.Panel className='mt-8 flex flex-col items-center md:hidden z-10 bg-white'>
							<div className='space-y-4 pb-3 '>
								<Link href='/lodging'>
									<Disclosure.Button className='mx-auto block w-screen border-2 border-l-4 border-transparent border-b-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
										<p className='font-serif text-sm font-semibold md:text-xl '>
											Lodging
										</p>
									</Disclosure.Button>
								</Link>
								<Link href='/visit'>
									<Disclosure.Button className='mx-auto block w-screen border-2 border-l-4 border-transparent border-b-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
										<p className='font-serif text-sm font-semibold md:text-xl '>
											Visit
										</p>
									</Disclosure.Button>
								</Link>
								<Link href='/about'>
									<Disclosure.Button className='mx-auto block w-screen border-2 border-l-4 border-transparent border-b-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
										<p className='font-serif text-sm font-semibold md:text-xl '>
											About
										</p>
									</Disclosure.Button>
								</Link>
								<Link href='/support'>
									<Disclosure.Button className='mx-auto block w-screen border-2 border-l-4 border-transparent border-b-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
										<p className='font-serif text-sm font-semibold md:text-xl '>
											Support Us
										</p>
									</Disclosure.Button>
								</Link>
								<Link href='/blog'>
									<Disclosure.Button className='mx-auto block w-screen border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'>
										<p className='font-serif text-sm font-semibold md:text-xl '>
											Blog
										</p>
									</Disclosure.Button>
								</Link>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	)
}
