import { Metadata } from 'next'

type GenerateMetadata = {
  params: { blogId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
}: GenerateMetadata): Promise<Metadata> {
  return {
    title: `Blog ${params.blogId}`,
  }
}

export default function BlogPage({ params }: { params: { blogId: string } }) {
  const { blogId } = params

  return (
    <div>
      <h1>Blog {blogId}</h1>
    </div>
  )
}
