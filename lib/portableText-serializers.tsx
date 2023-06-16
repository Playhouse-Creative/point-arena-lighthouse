import Link from 'next/link'

const serializers = () => {
	return {
        h1: ({ children }: any) => (
			<h1 className='text-4xl font-bold'>{children}</h1>
		),
        h2: ({ children }: any) => (
			<h2 className='font-sans text-3xl font-semibold'>{children}</h2>
		),
        h3: ({ children }: any) => (
			<h3 className='text-2xl font-medium'>{children}</h3>
		),
        h4: ({ children }: any) => (
			<h4 className='text-xl font-medium'>{children}</h4>
		),
		p: ({ children }: any) => ( <p style={{lineHeight:'1.75rem'}} className='font-sans text-base'>{children}</p>),
		ul: ({ children }: any) => (
			<ul style={{listStyleType: 'disc', listStylePosition:'inside', lineHeight:'1.75rem' }}>{children}</ul>
		),
		ol: ({ children }: any) => (
			<ol style={{listStyleType: 'decimal', listStylePosition:'inside', lineHeight:'1.75rem'}}>{children}</ol>
		),
		li: ({ children }: any) => (
			<li style={{listStyleType: 'disc', listStylePosition:'inside', lineHeight:'1.75rem', marginLeft: '12px' }}>{children}</li>
		),
		blockquote: ({ children }: any) => (
			<blockquote style={{borderLeftStyle: 'solid', borderLeftWidth: '4px', borderColor: '#0088A7', paddingLeft: '4px'}} className='italic'>&quot;{children}&quot;</blockquote>
		),
		link: ({ href, children }: any) => (
			<a className='underline text-pa-teal-4' href={href} target="_blank" rel="noopener noreferrer" >
				{children}
			</a>
		),
		internalLink: ({ value, children }: any) => {
			// const { slug = {} } = value
			// const href = `/${slug.current}`
			// return <Link href={href}><p className='underline text-pa-teal-4'>{children}</p></Link>
			<p className='underline text-pa-teal-4'>{children}</p>
		},
        highlight: ({ children }: any) => (
			<p style={{backgroundColor: '#A98551', color: 'white'}}>{children}</p>
		),
	}
}

export default serializers