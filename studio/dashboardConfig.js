export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8492ba4f6dfd0090ae2445',
                  title: 'Sanity Studio',
                  name: 'point-arena-lighthouse-studio',
                  apiId: 'abb112c2-68c9-4570-a0ce-b1c5d095b330'
                },
                {
                  buildHookId: '5f8492baf41bdb0096521bc0',
                  title: 'Point Arena Lighthouse',
                  name: 'point-arena-lighthouse',
                  apiId: 'c525317b-d524-444b-905e-ad4cb6bb6085'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jeremy-Logan/point-arena-lighthouse',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fort-bragg-food-bank.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
