import Link from 'next/link'

const serializers = () => {
	return {
        h1: ({ children }: { children: React.ReactNode }) => (
			<h1 className='text-4xl font-bold'>{children}</h1>
		),
        h2: ({ children }: { children: React.ReactNode }) => (
			<h2 className='font-sans text-3xl font-semibold'>{children}</h2>
		),
        h3: ({ children }: { children: React.ReactNode }) => (
			<h3 className='text-2xl font-medium'>{children}</h3>
		),
        h4: ({ children }: { children: React.ReactNode }) => (
			<h4 className='text-xl font-medium'>{children}</h4>
		),
		p: ({ children }: { children: React.ReactNode }) => ( <p style={{lineHeight:'1.75rem'}} className='font-sans text-base'>{children}</p>),
		ul: ({ children }: { children: React.ReactNode }) => (
			<ul style={{listStyleType: 'disc', listStylePosition:'inside', lineHeight:'1.75rem' }}>{children}</ul>
		),
		ol: ({ children }: { children: React.ReactNode }) => (
			<ol style={{listStyleType: 'decimal', listStylePosition:'inside', lineHeight:'1.75rem'}}>{children}</ol>
		),
		li: ({ children }: { children: React.ReactNode }) => (
			<li style={{listStyleType: 'disc', listStylePosition:'inside', lineHeight:'1.75rem', marginLeft: '12px' }}>{children}</li>
		),
		blockquote: ({ children }: { children: React.ReactNode }) => (
			<blockquote style={{borderLeftStyle: 'solid', borderLeftWidth: '4px', borderColor: '#0088A7', paddingLeft: '4px'}} className='italic'>&quot;{children}&quot;</blockquote>
		),
		link: ({ mark, children }: { mark: any, children: React.ReactNode }) => {
			const { href } = mark;
			if (href.startsWith('https://')) {
				return (
					<a
						className='underline text-pa-teal-4'
						href={href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{children}
					</a>
				);
			}
			else if (href.startsWith('/')) {
				return (
					<Link href={href}>
						<a className='underline text-pa-teal-4'>
							{children}
						</a>
					</Link>
				);
			}
		},
        highlight: ({ children }: any) => (
			<p style={{backgroundColor: '#A98551', color: 'white'}}>{children}</p>
		),
	}
}

export default serializers