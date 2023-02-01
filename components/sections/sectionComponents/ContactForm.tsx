import { useState } from 'react'
import Img from 'next/image'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
	const [agreed, setAgreed] = useState(false)

	return (
		<div className='overflow-hidden py-16'>
			<div className='relative mx-auto max-w-xl px-6'>
				<div className='w-full text-center'>
					<h2
						className='
        mt-8 font-serif text-4xl font-semibold text-pa-navy-4 '>
						Get in Touch
					</h2>
				</div>
				<div className='mt-12'>
					<form
						name='contact'
						method='POST'
						data-netlify='true'
						netlify-honeypot='bot-field'
						action='/'
						className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
						<input type='hidden' name='form-name' value='contact' />
						<label className='hidden'>
							Don’t fill this out if you’re human:
							<input name='bot-field' />
						</label>
						<div>
							<label
								htmlFor='first-name'
								className='block text-sm font-medium text-pa-navy-4'>
								First name
							</label>
							<div className='mt-1'>
								<input
									type='text'
									name='first-name'
									id='first-name'
									autoComplete='given-name'
									className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pa-teal-3 focus:ring-pa-teal-3'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='last-name'
								className='block text-sm font-medium text-pa-navy-4'>
								Last name
							</label>
							<div className='mt-1'>
								<input
									type='text'
									name='last-name'
									id='last-name'
									autoComplete='family-name'
									className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pa-teal-3 focus:ring-pa-teal-3'
								/>
							</div>
						</div>

						<div className='sm:col-span-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-pa-navy-4'>
								Email
							</label>
							<div className='mt-1'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pa-teal-3 focus:ring-pa-teal-3'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-pa-navy-4'>
								Message
							</label>
							<div className='mt-1'>
								<textarea
									id='message'
									name='message'
									rows={4}
									className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-pa-teal-3 focus:ring-pa-teal-3'
									defaultValue={''}
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<div className='flex items-start'>
								<div className='flex-shrink-0'>
									<Switch
										checked={agreed}
										onChange={setAgreed}
										className={classNames(
											agreed
												? 'bg-pa-green-3'
												: 'bg-gray-200',
											'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pa-teal-3 focus:ring-offset-2'
										)}>
										<span className='sr-only'>
											Agree to policies
										</span>
										<span
											aria-hidden='true'
											className={classNames(
												agreed
													? 'translate-x-5'
													: 'translate-x-0',
												'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
											)}
										/>
									</Switch>
								</div>
								<div className='ml-3'>
									<p className='text-base text-gray-500'>
										By selecting this, you agree to the{' '}
										<a
											href='#'
											className='font-medium text-pa-navy-4 underline'>
											Privacy Policy
										</a>{' '}
										and{' '}
										<a
											href='#'
											className='font-medium text-pa-navy-4 underline'>
											Cookie Policy
										</a>
										.
									</p>
								</div>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<button
								type='submit'
								className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pa-blue-3 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pa-blue-4 focus:outline-none focus:ring-2 focus:ring-pa-teal-3 focus:ring-offset-2'>
								Let{`'`}s talk
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='relative mt-36 h-24 md:h-36 w-full'>
				<div className='absolute left-0 top-1/2  w-[15vw] sm:w-[30vw] xl:w-[35vw] 2xl:w-[40vw]'>
					<svg
						version='1.1'
						id='line_2'
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='100%'
						height='10px'>
						<path
							stroke-width='6'
							stroke='#A98551'
							d='M0 0 l1120 0'
						/>
					</svg>
				</div>
				<Img
					src='/dogAndCatIcons.png'
					alt='Dog and Cat Icons'
					fill={true}
					style={{ objectFit: 'contain' }}
				/>
				<div className='absolute right-0 top-1/2 w-[15vw] sm:w-[30vw] xl:w-[35vw] 2xl:w-[40vw]'>
					<svg
						version='1.1'
						id='line_2'
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='100%'
						height='10px'>
						<path
							stroke-width='6'
							stroke='#A98551'
							d='M0 0 l1120 0'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
