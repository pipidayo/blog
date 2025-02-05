import { createClient } from 'microcms-js-sdk'

export type Blog = {
  id: string
  title: string
  body: string
}

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

// ブログ一覧を取得
export const getBlogs = async () => {
  const blogs = await client.getList<Blog>({
    endpoint: 'blogs',
  })
  return blogs
}

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
  try {
    const blog = await client.getListDetail<Blog>({
      endpoint: 'blogs',
      contentId,
    })

    // デバッグログ
    console.log('取得したブログ詳細:', blog)

    return blog
  } catch (error) {
    console.error('ブログ詳細の取得に失敗:', error)
    throw error
  }
}
