export default {
	name: 'infoListItem',
	type: 'object',
	title: 'Info List Item',
	fields: [
		{ name: 'heading', type: 'string' },
		{ name: 'body', type: 'simpleBlockContent'},
	],
  preview: {
    select: {
      title: 'heading'
    }
  }
}