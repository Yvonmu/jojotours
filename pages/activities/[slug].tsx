import React from "react";
import { ActivitiesDetails } from "@/utils/activitiesData";
import { useRouter } from "next/router";
export default function ActivityDetails() {
  const router = useRouter();
  const currentSector = ActivitiesDetails.find(
    (item) => item.slug === router.query.slug
  );

  if (!currentSector) {
    return (
      <div className="h-screen text-accent font-bold w-full grid place-items-center">
        404! Sorry, the Post you&apos;re looking for is not found.
      </div>
    );
  }
  return (
    <main className="flex justify-center py-16">
      <section className="md:w-[60%] w-[90%] flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4 items-center">
          <div className="bg-muted rounded-xl text-secondary py-2 px-4">
            Posted on
          </div>
          <div className="font-bold">{currentSector.datePosted}</div>
        </div>
        <h2>{currentSector.name}</h2>
        <div className="h-[50vh] w-full">
          <img
            src={currentSector.imageUrl}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div>
          <p>{currentSector.description}</p>
        </div>
      </section>
    </main>
  );
}
