export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '622b7d69057b28009e88c13e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-27m4vb2y',
                  apiId: '7e1b7b71-de58-4495-b3e6-804a9ad07e44'
                },
                {
                  buildHookId: '622b7d6a3a9ad4008d23a2e8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nh8ginb3',
                  apiId: 'ba86d15a-3f63-4988-af94-027538fa01ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mosesimbahale/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nh8ginb3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
