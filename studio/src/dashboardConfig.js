export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5faec800537ad70a2b100c85',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rccycb4v',
                  apiId: '4d2c4b7f-b93f-4fc8-a7a0-41315f38d178'
                },
                {
                  buildHookId: '5faec800853f150c265c04b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ke4torda',
                  apiId: '778527a3-8fed-4330-a1af-68902eec5062'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bandaska/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ke4torda.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
