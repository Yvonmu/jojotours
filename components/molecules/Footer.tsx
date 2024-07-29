import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ActivitiesDetails } from "@/utils/activitiesData";

export default function Footer() {
  return (
    <footer
      className="flex justify-center w-full bg-muted"
      style={{
        backgroundImage: `url("/icons/pattern.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-[80%]">
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-4 gap-16">
        <div className="flex flex-col gap-4">
          <div>
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={60}
                height={60}
                className="bg-cover"
                alt="jojo tours logo"
              />
            </Link>
          </div>
          <p className="font-bold">
            No matter what adventure you are looking for, we have a tour for
            you.
          </p>
        </div>
        <div
          className="md:p-8 p-2 grid gap-4 text-white rounded-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/zebra.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex gap-4 items-center">
            <div className="bg-white text-accent rounded-full p-2">
              <MapPin />
            </div>
            <div className="grid ">
              <span>Location</span>
              <p className="font-bold">YYUSSA Plaza Kisimenti, Kigali/Rwanda</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-white text-accent rounded-full p-2">
              <Mail />
            </div>
            <div className="grid ">
              <span>Email</span>
              <p className="font-bold">
                <Link href={"mailto:jojotours2023@gmail.com"}>
                  jojotours2023@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-white text-accent rounded-full p-2">
              <Phone />
            </div>
            <div className="grid ">
              <span>Call & Whatsapp</span>
              <p className="font-bold">
                <Link href={"tel:+250788312294"}>+250788312294</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-accent">Quick Links</p>
          <Link href={"/"} className="">
            Home
          </Link>
          <Link href={"/about_us"} className="">
            About us
          </Link>
          <Link href={"/cars"} className="">
            Cars
          </Link>
          <Link href={"/activities"} className="">
            Activities
          </Link>
          <Link href={"/destination_marketing"} className="">
            Destination Marketing
          </Link>

          <Link href={"/about_us/#contact_us"} className="">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-accent">Recent</p>
          <div className="flex flex-col gap-2">
            {ActivitiesDetails.slice(0, 2).map((item, index) => (
              <div className="flex gap-4" key={index}>
                <div className="">
                  <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    className="bg-cover rounded-xl w-full h-full"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="">
                  <p className="font-bold">{item.name}</p>
                  <Link
                    href={`/activities/${item.slug}`}
                    className="text-accent flex items-center gap-2"
                  >
                    Read More <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
      <p>Copyright © 2024 JOJO Tours Ltd. All rights reserved.</p>
      <p>Website designed and developed by <span className="text-accent">Elite-HYO Group Ltd.</span></p>      </div>
      </section>
    </footer>
  );
}
