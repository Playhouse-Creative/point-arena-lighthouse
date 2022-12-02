export default {
  name: 'mapListItems',
  type: 'object',
  title: 'Location',
  fields: [
    {
      name: 'locationName',
      type: 'string',
      title: 'Location Name'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'cityStateZip',
      type: 'string',
      title: 'City State and Zip'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'icon',
      type: 'mainImage',
      title: 'Icon'
    }
  ]
}
