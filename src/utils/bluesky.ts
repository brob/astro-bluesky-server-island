import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent({
  service: 'https://bsky.social'
})

await agent.login({
    identifier: 'brob.dev',
    password: import.meta.env.BLUESKY_PASSWORD
  })

export default agent