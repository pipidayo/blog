import { getDetail, getBlogs } from '@/app/libs/client'

export async function generateStaticParams() {
  const { contents } = await getBlogs()

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    }
  })
  return [...paths]
}

export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string }
}) {
  const blog = await getDetail(blogId)

  return (
    <>
      <p>{blog.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </>
  )
}
