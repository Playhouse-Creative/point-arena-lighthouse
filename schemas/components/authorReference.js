const authorReference = {
  name: 'authorReference',
  type: 'object',
  title: 'Author',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
};

export default authorReference;
