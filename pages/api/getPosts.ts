// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Appointment } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
  *[_type == "appointment" ]{
      _id,
      ...
  } | order(_createdAt desc)
`

type Data = {
  appointments: Appointment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const appointments: Appointment[] = await sanityClient.fetch(feedQuery)
  console.log('', appointments)
  res.status(200).json({ appointments })
}