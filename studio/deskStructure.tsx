import {
	GoMegaphone as BlogIcon,
	GoChecklist as ApprovedIcon,
	GoEye as ReviewIcon,
	GoCircleSlash as RejectedIcon,
	GoArchive as AllIcon,
	GoPerson as AuthorIcon,
	GoBrowser as PageIcon,
} from 'react-icons/go'

export const icons = {
	BlogIcon,
	ApprovedIcon,
	ReviewIcon,
	RejectedIcon,
	AllIcon,
}

export default (S: any) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Blog')
				.icon(BlogIcon)
				.child(
					S.list()
						.title('/blog')
						.items([
							S.listItem()
								.title('Published posts')
								.schemaType('post')
								.icon(BlogIcon)
								.child(
									S.documentList('post')
										.title('Published posts')
										.menuItems(S.documentTypeList('post').getMenuItems())
										// Only show posts with publish date earlier than now and that is not drafts
										.filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
										.child((documentId: any) => S.document().documentId(documentId).schemaType('post'))
								),
							S.documentTypeListItem('post').title('All posts').icon(AllIcon),
							S.listItem()
								.title('Posts by category')
								.child(
									// List out all categories
									S.documentTypeList('category')
										.title('Posts by category')
										.child((catId: string) =>
											// List out project documents where the _id for the selected
											// category appear as a _ref in the project’s categories array
											S.documentList()
												.schemaType('post')
												.title('Posts')
												.filter('_type == "post" && $catId in categories[]._ref')
												.params({catId})
										)
								),
							S.divider(),
							S.documentTypeListItem('author').title('Authors').icon(AuthorIcon),
							S.documentTypeListItem('category').title('Categories'),
						])
				),
			S.listItem()
				.title('Page Builder')
				.icon(PageIcon)
				.child(
					S.documentList('page')
						.title('Pages')
						.menuItems(S.documentTypeList('page').getMenuItems())
						.filter('_type == "page"')
				),
		])
