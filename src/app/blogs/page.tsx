import Link from 'next/link'
import { getBlogs } from '@/app/libs/client'

export default async function StaticPage() {
  const { contents } = await getBlogs()

  if (!contents) {
    return <h1 className='text-2xl font-bold text-center mt-20'>No Contents</h1>
  }

  return (
    <div className='min-h-screen container mx-auto px-4 py-8'>
      {/* 検索エリア */}
      <div className='mb-12'>
        <div className='max-w-2xl mx-auto'>
          <input
            type='text'
            className='text-input mb-2'
            placeholder='ブログを検索...'
          />
        </div>
      </div>

      {/* ブログ一覧 */}
      <ul className='max-w-3xl mx-auto space-y-6'>
        {contents.map((blog) => (
          <li
            key={blog.id}
            className='card flex flex-col md:flex-row justify-between items-center gap-4 p-6'
          >
            <div className='flex-1'>
              <h4 className='text-xl font-semibold mb-2'>{blog.title}</h4>
              {/* 必要に応じて日付や抜粋を追加 */}
              <p className='text-gray-600 dark:text-gray-300 text-sm'>
                {blog.publishedAt &&
                  new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
              </p>
            </div>
            <Link href={`/blogs/${blog.id}`}>
              <button className='button whitespace-nowrap'>詳細を見る</button>
            </Link>
          </li>
        ))}
      </ul>

      {/* ページネーションなどが必要な場合はここに追加 */}
      <div className='mt-12 flex justify-center'>
        {/* ページネーションコンポーネント */}
      </div>
    </div>
  )
}
