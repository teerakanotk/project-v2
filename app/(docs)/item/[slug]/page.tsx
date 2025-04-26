interface ItemPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { slug } = await params;
  return <div>{slug}</div>;
}
