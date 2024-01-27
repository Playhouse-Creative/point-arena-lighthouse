const roomCard = {
  type: 'object',
  name: 'roomCard',
  title: 'Room Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'This is the title of the room. It must fit inside the ribbon',
      validatio: (Rule) =>
        Rule.required().max(30).error('Title must be short enough to fit in the ribbon'),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Photos',
      of: [{type: 'mainImage'}],
      validation: (Rule) => Rule.required().max(12).error('Please use 12 images or less.'),
    },
    {
      name: 'subHeading',
      type: 'string',
    },
    {
      name: 'featuresList',
      title: 'List of features',
      type: 'array',
      of: [{type: 'iconListItem'}],
    },
    {name: 'price', title: 'Price per night', type: 'string'},
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'title',
    },
  },
};

export default roomCard;
