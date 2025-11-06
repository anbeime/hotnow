import type { NewsItem } from "@shared/types"

// 使用 RSSHub 获取电商热榜
const RSSHUB_LISTS = {
  taobao_hot: {
    url: "https://rsshub.app/taobao/hot",
    title: "淘宝热销",
  },
  jd_hot: {
    url: "https://rsshub.app/jd/hot",
    title: "京东热销",
  },
  pdd_hot: {
    url: "https://rsshub.app/pinduoduo/hot",
    title: "拼多多热销",
  },
  xiaohongshu_hot: {
    url: "https://rsshub.app/xiaohongshu/homefeed.xml",
    title: "小红书热榜",
  },
  weixin_hot: {
    url: "https://rsshub.app/wechat/toutiao",
    title: "微信热文",
  },
}

async function fetchRSSHubList(url: string): Promise<NewsItem[]> {
  try {
    const response: any = await myFetch(url)
    const items: NewsItem[] = []

    // RSSHub 返回 JSON 格式
    if (response.items && Array.isArray(response.items)) {
      response.items.slice(0, 30).forEach((item: any, idx: number) => {
        if (item.title || item.description) {
          items.push({
            id: `${item.id || item.link || idx}`,
            title: item.title || item.description || "未命名",
            url: item.link || "",
            pubDate: item.pubDate ? new Date(item.pubDate).getTime() : undefined,
            extra: {
              info: item.author || "",
            },
          })
        }
      })
    }

    return items
  } catch (error) {
    console.error(`Failed to fetch from RSSHub:`, error)
    return []
  }
}

// 直接使用热销商品 API
// async function fetchShoppingHot(): Promise<NewsItem[]> {
//   try {
//     // 使用通用爬虫 API 获取热销商品
//     const _response: any = await myFetch("https://api.github.com/repos/trending?since=daily&language=javascript")
//     return []
//   } catch (error) {
//     console.error(`Failed to fetch shopping hot:`, error)
//     return []
//   }
// }

// 定制的淘宝爆款列表
async function fetchTaobaoExplosive(): Promise<NewsItem[]> {
  try {
    // 返回静态数据用于测试
    return [
      {
        id: "taobao-1",
        title: "【官方旗舰店】女装连衣裙",
        url: "https://www.taobao.com",
        extra: { info: "🔥 爆款" },
      },
      {
        id: "taobao-2",
        title: "【专业卖家】运动鞋新款上市",
        url: "https://www.taobao.com",
        extra: { info: "💥 热销" },
      },
      {
        id: "taobao-3",
        title: "【家居用品】床上四件套",
        url: "https://www.taobao.com",
        extra: { info: "⭐ 精选" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch Taobao explosive:`, error)
    return []
  }
}

// 导出各个榜单
export default defineSource({
  taobao_hot: async () => fetchRSSHubList(RSSHUB_LISTS.taobao_hot.url),
  taobao_explosive: fetchTaobaoExplosive,
  jd_hot: async () => fetchRSSHubList(RSSHUB_LISTS.jd_hot.url),
  pdd_hot: async () => fetchRSSHubList(RSSHUB_LISTS.pdd_hot.url),
  xiaohongshu_hot: async () => fetchRSSHubList(RSSHUB_LISTS.xiaohongshu_hot.url),
  weixin_hot: async () => fetchRSSHubList(RSSHUB_LISTS.weixin_hot.url),
})
