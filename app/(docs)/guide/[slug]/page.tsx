interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  return <div>{slug}</div>;
}
