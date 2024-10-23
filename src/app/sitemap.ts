import { getEvents } from '../libs/cv'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const events = await getEvents()

  const eventSlugs = events
    .filter((event) => !event.isDraft)
    .map((event) => ({
      url: `${baseUrl}/cv/${event.slug}`,
      lastModified: event.lastModified,
    }))

  return [
    ...eventSlugs,
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/cv`, lastModified: new Date() },
  ]
}
