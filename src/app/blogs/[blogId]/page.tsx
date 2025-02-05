import { Metadata } from 'next'

type Props = {
  params: {
    blogId: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog ${params.blogId}`,
  }
}

export default function BlogPage({ params }: Props) {
  const { blogId } = params

  return (
    <div>
      <h1>Blog {blogId}</h1>
    </div>
  )
}
