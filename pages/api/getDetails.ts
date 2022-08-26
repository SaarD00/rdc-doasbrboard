// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Detail } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
  *[_type == "detail" ]{
      _id,
      ...
  } | order(_createdAt desc)
`

type Data = {
  details: Detail[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const details: Detail[] = await sanityClient.fetch(feedQuery)
  console.log('🚀 ~ file: getTweets.ts ~ line 23 ~ posts', details)
  res.status(200).json({ details })
}