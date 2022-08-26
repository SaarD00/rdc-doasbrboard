import { Post } from '../typings'

export const fetchDetails = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getDetails`)

  const data = await res.json()
  const details: Post[] = data.details
  return details
}