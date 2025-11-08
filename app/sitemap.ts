import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roblox-clicker.net'
  const currentDate = new Date()

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    // Game pages (all existing games)
    { url: `${baseUrl}/games/roblox-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/games/race-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/games/cookie-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/games/fortnite-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/games/mcdonald-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/games/milk-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/games/fruit-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/games/burger-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/games/money-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    // Guide pages
    { url: `${baseUrl}/guides/how-to-play`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/guides/tips-and-tricks`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/guides/auto-clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    // Other pages
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/category/clicker`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
  ]
}




