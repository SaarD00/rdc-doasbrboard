// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
  *[_type == "post" ]{
      _id,
      ...
  } | order(_createdAt desc)
`

type Data = {
  posts: Post[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const posts: Post[] = await sanityClient.fetch(feedQuery)
  console.log('🚀 ~ file: getTweets.ts ~ line 23 ~ posts', posts)
  res.status(200).json({ posts })
}