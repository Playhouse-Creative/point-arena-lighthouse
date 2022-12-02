import S from '@sanity/desk-tool/structure-builder'

import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go'



export default S.listItem()
	.title('Page Builder')
	.icon(PageIcon)
	.child(
		S.documentList('page')
			.title('Pages')
			.menuItems(S.documentTypeList('page').getMenuItems())
			.filter('_type == "page"')
	)
