import { Slug, PortableTextBlock } from '@sanity/types'

export type PostData = {
	
		
			_id: string
			slug: Slug
			title: string
			date: string
			img: string
			mainImage: {
				asset: {
					_id: string
					url: string
				}
			}
			description: string
			body: PortableTextBlock
			publishedAt: string
			author: { name: string; image: any }
			excerpt: string
			category: {
				title: string
				color: { title: string; value: string }
			}[]
		
	
}

export type Post = {
	[x: string]: any
	postData: PostData
}

export type PageData = {
	pageData: {
		pageSections: {
			_id: string
			slug: Slug
			content: {
				_id: string
				_type: string
			}[]
			title: string
			mainImage: {
				asset: {
					_id: string
					url: string
				}
			}
		}[]
		postData: {
			_id: string
			slug: {
				current: string
			}
			title: string
			mainImage: {
				asset: {
					_id: string
					url: string
				}
			}
		}[]
	}
}
export type CTA = {
	_id: string
	_type: string
	title: string
	description: string
	link: string
	route: string
	landingPageRoute: { slug: Slug }
	slug: Slug
	kind: string
	buttonActionClass: string
	linkText: string
	image: {
		_type: string
		_key: string
		_ref: string
	}
}
