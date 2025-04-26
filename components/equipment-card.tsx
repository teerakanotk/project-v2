"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface EquipmentCardProps {
  name: string;
  status: string;
  obtain: string;
  image?: string;
}

export function EquipmentCard({
  name,
  status,
  obtain,
  image,
}: EquipmentCardProps) {
  return (
    <>
      <div className="flex flex-col justify-start p-4 border rounded-md bg-background">
        <span className="flex items-center justify-center text-lg font-bold">
          {name}
        </span>
        <Separator className="mt-2 mb-4" />
        <section className="grid xl:grid-cols-[200px_minmax(0,1fr)] gap-4">
          {/* Image */}
          <div className="flex justify-center">
            {image ? (
              <Image src={image} width={200} height={240} alt={name} />
            ) : (
              <div className="flex items-center justify-center h-[240px] w-[200px] bg-accent">
                <span className="text-foreground/50">No Image</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <div className="h-full w-full mb-auto">
              <span className="font-semibold">Status:</span>
              <Separator className="mb-2" />
              <span>
                {/* split status into new line */}
                {status.split(",").map((item, index) => {
                  return <div key={index}>{item.trim()}</div>;
                })}
              </span>
            </div>

            <div className="h-full w-full">
              <span className="font-semibold">Obtain:</span>
              <Separator className="mb-2" />
              <span>
                {obtain.split(",").map((item, index) => {
                  return <div key={index}>{item.trim()}</div>;
                })}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
