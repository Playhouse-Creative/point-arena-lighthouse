export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }, 
    {
      name: 'color',  
      title: 'Color',
      description:'Choose a color for for the category banner color.',
      type: 'colorlist',
      
      options: { list:[
          { title: 'Red', value: '#A73D1C' },
          { title: 'Teal', value: '#0088A7' },
          { title: 'Navy', value: '#002C49' },
          { title: 'Green', value: '#49763E' },
          { title: 'Blue', value: '#054F73' },
        ]},
    },
  ],
  preview: {
    select: {
      title: 'title', 
      
    }
  }
}
