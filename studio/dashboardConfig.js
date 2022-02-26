export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '6219a232a0e0752f6d525928',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yigwz9fk',
                  apiId: 'b9490e56-309a-4213-b20c-b85abe35e979'
                },
                {
                  buildHookId: '6219a232af444b37bf179ef1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tzawhh1y',
                  apiId: 'e604484d-6b74-474b-b7f5-aaf1bbdc311d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beatrixdrake/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tzawhh1y.netlify.app', category: 'apps'}
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
