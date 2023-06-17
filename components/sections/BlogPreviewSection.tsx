import BlogPostPreview from './sectionComponents/BlogPostPreview'
import { PostData } from '../../lib/types'
import _ from 'lodash'

type Props = {
	posts: PostData[]
	title: string
}

const BlogPreviewSection = (props: Props) => {
	const filteredPosts = _.filter(props.posts, (post) => {
		return post.category[0].title !== "Archived" && post.category[0].title !== "Past Events";
	});
	const firstThreePosts = filteredPosts.slice(0,3)
	return (
		<div className={'bg-pa-blue-4 py-10'}>
			<h2 className={'text-center font-serif text-xl font-bold tracking-wide text-white md:text-4xl'}>
				{props.title}
			</h2>
			<div className='grid grid-cols-1 gap-6 p-5 mx-auto max-w-7xl bg-pa-blue-4 sm:grid-cols-2 md:p-6 lg:grid-cols-3'>
				{props.posts &&
					firstThreePosts.map((node: any, i: number) => (
						<BlogPostPreview key={i} className={'bg-white '} {...node} />
					))}
			</div>
		</div>
	)
}

export default BlogPreviewSection
