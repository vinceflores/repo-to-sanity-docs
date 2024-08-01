---
sidebar_position: 3
---
# Configuration

| Name            | Description                                               | Type                                                             |
| --------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| cleint          | The sanity client instance to be used to perform queries. | SanityClient                                                     |
| first           | The first `n` repositories to be fetched `Default = 15 `. | number                                                           |
| graphqlWithAuth | The octokit client used to fetch github's graphql api.    | graphql                                                          |
| login           | The github login, for example 'vinceflores'               | string                                                           |
| isFork          | Determines if a repository is a fork                      | boolean                                                          |
| visibility      | The visibility of the repository. 'PUBLIC' or 'PRIVATE'   | string                                                           |
| layout          | Configures the `width` and `height` of the widget         | `width`/`height` : ['auto', 'full', 'large', 'small', 'medium' ] |
