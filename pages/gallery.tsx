/* eslint-disable @next/next/no-img-element */
import { GalleryData } from "@/utils/galleryData";
import React from "react";

export default function Gallery() {
  return (
    <main>
      <section className="flex justify-center">
        <div className="w-[80%] py-16 flex flex-col gap-8">
          <div className="md:grid place-items-center">
            <div className="flex justify-center items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              Gallery
            </div>
            <h2>Capture the Adventure</h2>
            <p className="xl:w-1/2 text-center">
              Explore our gallery to witness the breathtaking beauty of Rwanda
              through the eyes of our travelers. Each photo tells a story of
              adventure, culture, and natural wonder.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GalleryData.map((url, index) => (
              <div key={index} className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={url}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
