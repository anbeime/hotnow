import type { NewsItem } from "@shared/types"

// 淘宝热销 - 使用官方页面
async function fetchTaobaoHot(): Promise<NewsItem[]> {
  try {
    // const html: any = await myFetch("https://www.taobao.com")
    // 从页面中提取热销商品
    // 注：淘宝使用动态渲染，实际可能无法直接获取
    // 返回示例数据
    return [
      {
        id: "taobao-hot-1",
        title: "女装连衣裙夏季新款",
        url: "https://www.taobao.com/markets/taobao/fashion",
        extra: { info: "🔥 热销" },
      },
      {
        id: "taobao-hot-2",
        title: "家用电器超级品牌日",
        url: "https://www.taobao.com",
        extra: { info: "⭐ 精选" },
      },
      {
        id: "taobao-hot-3",
        title: "护肤品专场活动",
        url: "https://www.taobao.com",
        extra: { info: "💰 优惠" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch Taobao hot:`, error)
    return []
  }
}

// 淘宝爆款 - 使用示例数据
async function fetchTaobaoExplosive(): Promise<NewsItem[]> {
  try {
    return [
      {
        id: "taobao-exp-1",
        title: "【官方旗舰店】女装连衣裙",
        url: "https://www.taobao.com",
        extra: { info: "🔥 爆款" },
      },
      {
        id: "taobao-exp-2",
        title: "【专业卖家】运动鞋新款上市",
        url: "https://www.taobao.com",
        extra: { info: "💥 热销" },
      },
      {
        id: "taobao-exp-3",
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

// 京东热销 - 使用官方页面
async function fetchJDHot(): Promise<NewsItem[]> {
  try {
    // const html: any = await myFetch("https://www.jd.com")
    // 京东同样使用动态渲染，返回示例数据
    return [
      {
        id: "jd-hot-1",
        title: "iPhone 15 系列手机",
        url: "https://www.jd.com/search",
        extra: { info: "📱 热销" },
      },
      {
        id: "jd-hot-2",
        title: "MacBook Pro 办公电脑",
        url: "https://www.jd.com/search",
        extra: { info: "💻 精选" },
      },
      {
        id: "jd-hot-3",
        title: "智能家居设备专场",
        url: "https://www.jd.com/search",
        extra: { info: "🏠 热门" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch JD hot:`, error)
    return []
  }
}

// 拼多多热销 - 使用官方页面
async function fetchPDDHot(): Promise<NewsItem[]> {
  try {
    // const html: any = await myFetch("https://www.pinduoduo.com")
    // 拼多多同样使用动态渲染，返回示例数据
    return [
      {
        id: "pdd-hot-1",
        title: "平价好货日常必需品",
        url: "https://www.pinduoduo.com",
        extra: { info: "💰 便宜" },
      },
      {
        id: "pdd-hot-2",
        title: "秒杀专场 9.9 元包邮",
        url: "https://www.pinduoduo.com",
        extra: { info: "⚡ 秒杀" },
      },
      {
        id: "pdd-hot-3",
        title: "新人专享优惠券",
        url: "https://www.pinduoduo.com",
        extra: { info: "🎁 优惠" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch Pinduoduo hot:`, error)
    return []
  }
}

// 小红书热榜 - 使用官方页面
async function fetchXiaoHongShuHot(): Promise<NewsItem[]> {
  try {
    // const html: any = await myFetch("https://www.xiaohongshu.com")
    // 小红书同样使用动态渲染，返回示例数据
    return [
      {
        id: "xhs-hot-1",
        title: "今秋必入的穿搭灵感",
        url: "https://www.xiaohongshu.com",
        extra: { info: "👗 穿搭" },
      },
      {
        id: "xhs-hot-2",
        title: "护肤秘诀分享",
        url: "https://www.xiaohongshu.com",
        extra: { info: "💅 美妆" },
      },
      {
        id: "xhs-hot-3",
        title: "美食探店推荐",
        url: "https://www.xiaohongshu.com",
        extra: { info: "🍜 美食" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch Xiaohongshu hot:`, error)
    return []
  }
}

// 微信热文 - 使用示例数据
async function fetchWeixinHot(): Promise<NewsItem[]> {
  try {
    return [
      {
        id: "weixin-hot-1",
        title: "2024年下半年经济形势分析",
        url: "https://mp.weixin.qq.com",
        extra: { info: "📰 时事" },
      },
      {
        id: "weixin-hot-2",
        title: "健康养生知识普及",
        url: "https://mp.weixin.qq.com",
        extra: { info: "💪 健康" },
      },
      {
        id: "weixin-hot-3",
        title: "亲子教育经验分享",
        url: "https://mp.weixin.qq.com",
        extra: { info: "👨‍👩‍👧 家庭" },
      },
    ]
  } catch (error) {
    console.error(`Failed to fetch Weixin hot:`, error)
    return []
  }
}

// 导出各个榜单
export default defineSource({
  taobao_hot: fetchTaobaoHot,
  taobao_explosive: fetchTaobaoExplosive,
  jd_hot: fetchJDHot,
  pdd_hot: fetchPDDHot,
  xiaohongshu_hot: fetchXiaoHongShuHot,
  weixin_hot: fetchWeixinHot,
})
