interface MapPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MapPage({ params }: MapPageProps) {
  const { slug } = await params;
  return <div>{slug}</div>;
}
