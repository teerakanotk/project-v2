interface EquipmentPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EquipmentPage({ params }: EquipmentPageProps) {
  const { slug } = await params;

  return <div>{slug}</div>;
}
