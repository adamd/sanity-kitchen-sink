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
                  buildHookId: '60baa4694d9b8c43a864d820',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-of2yosgf',
                  apiId: '4f1754e0-cbf1-4034-88b3-f51b7749a1bf'
                },
                {
                  buildHookId: '60baa46974244f3bbcf51697',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wsev8psb',
                  apiId: '633a60a5-161c-4679-882c-7394d189b32a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamd/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wsev8psb.netlify.app', category: 'apps'}
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
