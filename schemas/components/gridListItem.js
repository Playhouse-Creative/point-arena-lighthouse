const gridListItem = {
	name: 'gridListItem',
	type: 'object',
	title: 'Grid List Item',
	fields: [
		{ name: 'heading', type: 'iconListItem' },
		{ name: 'items', type: 'array', of: [{ type: 'string' }] },
	],
	preview: {
		select: {
			imageUrl: 'heading.icon.asset.url',
			title: 'heading.title'
		}
	}
};

export default gridListItem;
