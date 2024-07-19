import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Destination_Marketing() {
    return (
        <div className="grid place-items-center h-[80vh]">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  width={100}
                  height={100}
                  className="bg-cover"
                  alt="jojo tours logo"
                />
              </Link>
            </div>
            <h1>We&apos;ll Be Back Soon</h1>
            <p>
              JoJo Tours website is down for scheduling and maintenance. We expect
              to be back online soon!
            </p>
            <p>
              For more information, please contact us: Phone:{" "}
              <Link href={"tel:+250788312294"} className="text-accent font-bold">
                +250 788 312 294
              </Link>{" "}
              / Email:{" "}
              <Link
                href={"mailto:jojotours@gmail.com"}
                className="text-accent font-bold"
              >
                jojotours@gmail.com
              </Link>
            </p>
            <Image
              src={"/images/Maintenance.png"}
              width={400}
              height={500}
              className="bg-cover"
              alt="jojo tours logo"
            />
            <div className="flex items-center text-center">
              <p className="text-primary">
                In the meantime checkout our social media.
              </p>
              <div className="flex gap-2 items-center text-2xl">
              <Link href={"https://www.instagram.com/jojotours.ltd/"} target="_blank" className="bg-white text-accent rounded-full p-2">
                  <FaInstagram />
                </Link>
                <Link href={"https://www.facebook.com/jojolyne2022"} target="_blank" className="bg-white text-accent rounded-full p-2">
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}
