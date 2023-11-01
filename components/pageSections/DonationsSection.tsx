import React from 'react'

type Props = {
	title: string
	linkId: { slug: { current: string } }
}

export default function DonationsSection(props: Props) {
	return (
		<div
			className='mx-4 my-12 scroll-mt-96'
			id={`${props.linkId ? props.linkId.slug.current.split('#')[1] : null}`}
		>
			<h3
				className='mt-10 mb-8 ml-6 font-serif text-4xl font-semibold text-center text-pa-navy-4'
			>
				Donation Section
			</h3>
			<div className='relative mx-auto mb-12 max-w-[1400px] border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<div className='flex flex-col justify-around mx-2 my-8 sm:mx-12 sm:flex-row'>
					<form target='_blank' action='https://www.paypal.com/cgi-bin/webscr' method='post'>
						<input type='hidden' name='cmd' value='_s-xclick' />
						<input type='hidden' name='hosted_button_id' value='RNEJJEPWZJCRW' />
						<table>
							<tbody>
								<tr>
									<td>
										<input type='hidden' name='on0' value='Select Sponsorship Level:' />
										Select Sponsorship Level:
									</td>
								</tr>
								<tr>
									<td>
										<select name='os0'>
											<option value='Apprentice Keeper'>Apprentice Keeper $25.00 USD</option>
											<option value="Keeper's Assistant">Keeper&apos;s Assistant $50.00 USD</option>
											<option value="Keeper's Assistant II">Keeper&apos;s Assistant II $100.00 USD</option>
											<option value='Lighthouse Keeper'>Lighthouse Keeper $200.00 USD</option>
											<option value='Head Lighthouse Keeper'>Head Lighthouse Keeper $500.00 USD</option>
											<option value='Silver Lighthouse Keeper'>Silver Lighthouse Keeper $1,000.00 USD</option>
											<option value='Gold Lighthouse Keeper'>Gold Lighthouse Keeper $5,000.00 USD</option>
											<option value='Platinum Lighthouse Keeper'>
												Platinum Lighthouse Keeper $10,000.00 USD
											</option>
										</select>{' '}
									</td>
								</tr>
							</tbody>
						</table>
						<button
							name='submit'
							className='self-end px-6 py-2 mt-4 font-serif text-xl font-medium tracking-wider text-white border border-transparent rounded-lg shadow-xl bg-pa-red-4 hover:bg-pa-red-3'
						>
							Add to cart
							<input type='hidden' name='currency_code' value='USD' />
						</button>
					</form>
					<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>
						<input type='hidden' name='cmd' value='_s-xclick' />
						<input type='hidden' name='hosted_button_id' value='7EVY4Z4D8TSX2' />
						<table>
							<tbody>
								<tr>
									<td>
										<input type='hidden' name='on0' value='Select a Membership Level' />
										Select a Membership Level
									</td>
								</tr>
								<tr>
									<td>
										<select name='os0'>
											<option value='Individual'>Individual $50.00 USD</option>
											<option value='Family'>Family $75.00 USD</option>
											<option value='Business'>Business $200.00 USD</option>
											<option value='Individual Lifetime'>Individual Lifetime $500.00 USD</option>
											<option value='Family Lifetime'>Family Lifetime $650.00 USD</option>
											<option value='In Memoriam'>In Memoriam $150.00 USD</option>
										</select>{' '}
									</td>
								</tr>
							</tbody>
						</table>
						<button
							name='submit'
							className='self-end px-6 py-2 mt-4 font-serif text-xl font-medium tracking-wider text-white border border-transparent rounded-lg shadow-xl bg-pa-red-4 hover:bg-pa-red-3'
						>
							Donate
							<input type='hidden' name='currency_code' value='USD' />
						</button>
					</form>
				</div>
				<div className='mx-4 mb-3 text-pa-navy-4'></div>
			</div>
		</div>
	)
}
