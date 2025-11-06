import * as cheerio from "cheerio"
import type { NewsItem } from "@shared/types"

// TopHub 榜单配置
const TOPHUB_LISTS = {
  taobao_hot: {
    url: "https://tophub.today/n/yjvQDpjobg",
    title: "淘宝热销",
  },
  taobao_explosive: {
    url: "https://tophub.today/n/7Gdab3peQy",
    title: "淘宝爆款",
  },
  jd_hot: {
    url: "https://tophub.today/n/YqoXzV6dOD",
    title: "京东热销",
  },
  pdd_hot: {
    url: "https://tophub.today/n/ExYeS74vwl",
    title: "拼多多热销",
  },
  xiaohongshu_hot: {
    url: "https://tophub.today/n/9ZGOjRvGOp",
    title: "小红书热榜",
  },
  weixin_hot: {
    url: "https://tophub.today/n/WnBe01o371",
    title: "微信热文",
  },
}

async function fetchTophubList(url: string): Promise<NewsItem[]> {
  try {
    const html: any = await myFetch(url)
    const $ = cheerio.load(html)
    const items: NewsItem[] = []

    // TopHub 的列表结构：.table-striped tbody tr
    $(".table-striped tbody tr").slice(0, 30).each((_, el) => {
      const $row = $(el)
      const rank = $row.find("td:nth-child(1)").text().trim()
      const title = $row.find("td:nth-child(2)").text().trim()
      const heat = $row.find("td:nth-child(3)").text().trim()

      // 获取链接
      const $link = $row.find("td:nth-child(2) a").first()
      const href = $link.attr("href")

      if (title && href) {
        items.push({
          id: `tophub-${rank}-${title}`,
          title,
          url: href.startsWith("http") ? href : `https://tophub.today${href}`,
          extra: {
            info: heat || rank,
          },
        })
      }
    })

    return items
  } catch (error) {
    console.error(`Failed to fetch TopHub list:`, error)
    return []
  }
}

// 导出各个榜单
export default defineSource({
  taobao_hot: async () => fetchTophubList(TOPHUB_LISTS.taobao_hot.url),
  taobao_explosive: async () => fetchTophubList(TOPHUB_LISTS.taobao_explosive.url),
  jd_hot: async () => fetchTophubList(TOPHUB_LISTS.jd_hot.url),
  pdd_hot: async () => fetchTophubList(TOPHUB_LISTS.pdd_hot.url),
  xiaohongshu_hot: async () => fetchTophubList(TOPHUB_LISTS.xiaohongshu_hot.url),
  weixin_hot: async () => fetchTophubList(TOPHUB_LISTS.weixin_hot.url),
})
