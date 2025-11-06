import process from "node:process"
import type { NewsItem } from "@shared/types"

export default defineSource(async () => {
  try {
    console.log("正在获取 YouTube 热门视频...")
    const proxy_url = process.env.YOUTUBE_PROXY_URL || "https://hotnow-youtube-proxy.13632833907.workers.dev"
    const response: any = await myFetch(`${proxy_url}/api/youtube/trending`)
    const news: NewsItem[] = []

    if (response.success && Array.isArray(response.data)) {
      response.data.slice(0, 30).forEach((video: any) => {
        if (video.videoId && video.title) {
          news.push({
            id: video.videoId,
            title: video.title,
            url: video.url || `https://www.youtube.com/watch?v=${video.videoId}`,
            pubDate: (video.published || Math.floor(Date.now() / 1000)) * 1000,
            extra: {
              info: `👁 ${video.viewCountText || video.viewCount || 0}`,
            },
          })
        }
      })
    }

    return news
  } catch (error) {
    console.error("YouTube 获取错误:", error)
    return []
  }
})
