// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { User } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
  *[_type == "user" ]{
      _id,
      ...
  } | order(_createdAt desc)
`

type Data = {
  users: User[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users: User[] = await sanityClient.fetch(feedQuery)
  console.log('🚀 ~ file: getTweets.ts ~ line 23 ~ posts', users)
  res.status(200).json({ users })
}