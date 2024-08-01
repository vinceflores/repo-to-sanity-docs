---
sidebar_position: 2
---
# Usage

Create a `repo.ts` and add it to your list of schemaTypes

```typescript
// repo.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'repo',
  title: 'Repo',
  type: 'document',
  fields: [
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'image',

      description: 'Preview of the live site',
    }),
    defineField({
      name: 'repo_name',
      title: 'Reposityory Name',
      type: 'string',
      description: 'please use the name of the reposityory from github',
    }),
    defineField({
      name: 'repo_url',
      title: 'URL',
      type: 'string',
      description: 'This is the link to your repository',
    }),
    defineField({
      name: 'live_url',
      title: 'Live',
      type: 'string',
      description: 'This is the link to your repository',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'This is where the tags go',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Ex: JavaScript, Python, Go',
    }),
  ],
})
```

```typescript
// index.ts

import repo from 'repo.ts'
export const schemaTypes = [
  ...,
  repo
]

```
> ###### Note: Be careful with your environment variables as `SANITY_STUDIO` prefix may expose them in the client side. Please refer to [sanity docs](https://www.sanity.io/docs/environment-variables)
>
> Copy into `utils.ts` to initialize necessary clients

```ttypescripts
//utils.ts
import {createClient} from '@sanity/client'
import {graphql} from '@octokit/graphql'

// sanity client
export const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_.DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_STUDIO_.SANITY_SECRET_TOKEN
})

// github graphql with auth
export const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: 'bearer ' + process.env.SANITY_STUDIO_GITHUB_TOKEN,
      },
})
```

Add it as a widget within `dashboard` in `sanity.config.ts` (or .js):

```typescript
import {defineConfig} from 'sanity'
import {sanityClient,graphqlWithAuth } from '@/utils.ts'
import {
  dashboardTool,
} from '@sanity/dashboard'
import {GithubReposListWidget} from 'repos-to-sanity'

export default defineConfig({
  //...
 plugins: [
    ...,
    dashboardTool({
      widgets: [
        ...,
        // Example Here
        GithubReposListWidget({
          sanityClient,
          graphqlWithAuth,
          login: "GITHUB_USERNAME",
          first: 5,
          layout: {
            width: "auto",
            height: "auto"
          }
        }),
      ],
    }),
  ],
})
```
