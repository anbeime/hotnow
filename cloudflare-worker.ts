/**
 * Cloudflare Workers - YouTube 热榜 API 代理
 * 
 * 部署方式：
 * 1. 安装 wrangler: npm install -g wrangler
 * 2. 登录: wrangler login
 * 3. 创建项目: wrangler init youtube-proxy
 * 4. 复制此代码到 src/index.ts
 * 5. 部署: wrangler deploy
 */

interface Env {
  INVIDIOUS_INSTANCE?: string
}

interface Video {
  videoId: string
  title: string
  author: string
  authorId?: string
  viewCount: number
  viewCountText?: string
  published: number
  publishedText?: string
  lengthSeconds: number
  url: string
  invidious_url: string
}

async function fetchYouTubeTrending(env: Env): Promise<Video[]> {
  const invidious_url = env.INVIDIOUS_INSTANCE || 'http://localhost:9000'
  
  try {
    const response = await fetch(`${invidious_url}/api/v1/trending`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Invidious returned ${response.status}`)
    }

    const videos = await response.json() as any[]

    // 转换数据格式
    return (videos || []).slice(0, 30).map((video) => ({
      videoId: video.videoId,
      title: video.title,
      author: video.author,
      authorId: video.authorId,
      viewCount: video.viewCount,
      viewCountText: video.viewCountText,
      published: video.published,
      publishedText: video.publishedText,
      lengthSeconds: video.lengthSeconds,
      url: `https://www.youtube.com/watch?v=${video.videoId}`,
      invidious_url: `${invidious_url}/watch?v=${video.videoId}`
    }))
  } catch (error) {
    throw new Error(`Failed to fetch from Invidious: ${error.message}`)
  }
}

function jsonResponse(data: any, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers
    }
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      })
    }

    const url = new URL(request.url)
    const pathname = url.pathname

    try {
      if (pathname === '/api/youtube/trending') {
        const videos = await fetchYouTubeTrending(env)
        return jsonResponse({
          success: true,
          data: videos,
          count: videos.length,
          timestamp: new Date().toISOString()
        })
      } else if (pathname === '/health') {
        return jsonResponse({
          status: 'ok',
          timestamp: new Date().toISOString()
        })
      } else {
        return jsonResponse({
          error: 'Not found',
          available_endpoints: [
            '/api/youtube/trending',
            '/health'
          ]
        }, 404)
      }
    } catch (error) {
      console.error('Error:', error)
      return jsonResponse({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }, 500)
    }
  }
}
