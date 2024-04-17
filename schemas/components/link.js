
const link = {
  type: 'object',
  name: 'link',
  title: 'URL',
  description: 'Add a clickable link to an external page or an internal page',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      name: "link",
      type: "url",
      title: "External URL",
      description: "Enter the URL for the link in the format https://www.example.com",
      hidden: ({ parent, value }) => !value && !!parent?.route && !!parent?.anchorLink,
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string',
      hidden: ({ parent, value }) => !value && !!parent?.link && !!parent?.anchorLink,
    },
      {
      name: 'anchorLink',
      title: 'Anchor Link',
      fieldset: 'link',
      type: 'reference',
      to: [{ type: 'linkId' }],
      hidden: ({ parent, value }) => !value && !!parent?.link && !!parent?.route,
    },
  ],
};

export default link;
