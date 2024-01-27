import TableSectionIcon from '../../studio/static/tableSectionIcon'

const tableSection = {
  type: 'object',
  name: 'tableSection',
  title: 'Table Section',
  icon: TableSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Section Title',
      validation: Rule => [Rule.required().error('Title is required.'),
      Rule.max(75).warning('Text should be less than 75 characters.')],
    },
    {
      name: 'linkId',
      type: 'reference',
      to: [{type: 'linkId'}],
      title: 'Link ID',
      description:
        'This is the ID that will be used in the URL to link to this section. It must be unique.',
    },
    {
      type: 'object',
      name: 'columns',
      options: {columns: 2},
      fields: [
        {
          type: 'tableColumn',
          name: 'columnOne',
          title: 'Column One',
        },
        {
          type: 'tableColumn',
          name: 'columnTwo',
          title: 'Column Two',
        },
      ],
    },
    {name: 'finePrint', type: 'simpleBlockContent', title: 'Fine Print'},
  ],
}

export default tableSection;
