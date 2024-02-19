import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3000/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'http://localhost:3000/corporate',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'http://localhost:3000/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
        url: 'http://localhost:3000/library',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'http://localhost:3000/recruit',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
  ]
}