import { createClient } from 'contentful'

const SPACE_ID = 'st2w4t2u7h9u'
const ACCESS_TOKEN =
  '6ea446be4294a1b10532d55ce88067fef62df2c0d636240b524a25da7d93a353'

export function getPosts() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })

  return client.getEntries({ content_type: 'posts' })
}

export function getPostBySlug(slug) {
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

  return client.getEntries({ content_type: 'posts', 'fields.slug': slug })
}
