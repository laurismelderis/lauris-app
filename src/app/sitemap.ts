import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laurism.me'

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/cv`, lastModified: new Date() },
  ]
}
