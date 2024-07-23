import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-secondary xl:py-16 md:p-16 p-8 xl:px-40">
      <section className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-16">
        <div className="flex flex-col gap-8">
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
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </span>
        </div>
        <div
          className="p-8 grid gap-4 text-white rounded-xl"
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
              <p className="font-bold">YYUSSA Plaza Kisimenti, Remera/Rwanda</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-white text-accent rounded-full p-2">
              <Mail />
            </div>
            <div className="grid ">
              <span>Email</span>
              <p className="font-bold">
                <Link href={""}>jojotours2023@gmail.com</Link>
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
                <Link href={""}>+2507888888</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-2"> */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-accent">Quick Links</p>
            <Link href={""} className="">
              Home
            </Link>
            <Link href={""} className="">
              Services
            </Link>
            <Link href={""} className="">
              Activities
            </Link>
            <Link href={""} className="">
              Destination Marketing
            </Link>
            <Link href={""} className="">
              About us
            </Link>
            <Link href={""} className="">
              Contact us
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-bold text-accent">Recent</p>
            <div className="flex gap-4">
              <div className="">
                <Image
                  src={"/images/zebra.jpg"}
                  width={100}
                  height={100}
                  className="bg-cover rounded-xl w-full h-full"
                  alt="jojo tours logo"
                />
              </div>
              <div className="">
                <p className="font-bold">
                  Gorilla Trekking in Volcanoes National Park
                </p>
                <Link href={""} className="text-accent flex items-center gap-2">
                  Read More <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src={"/logo.png"}
                  width={100}
                  height={100}
                  className="bg-cover rounded-xl w-full h-full"
                  alt="jojo tours logo"
                />
              </div>
              <div className="">
                <p className="font-bold">
                  Gorilla Trekking in Volcanoes National Park
                </p>
                <Link href={""} className="text-accent flex items-center gap-2">
                  Read More <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </footer>
  );
}
