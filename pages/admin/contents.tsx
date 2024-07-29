import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import ContentOverview from "@/components/atoms/ContentOverview";

export default function Contents() {
  const currentDateToDisplay = formatDate();
  const [selectedPage, setSelectedPage] = useState<string>("");

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <main className="py-8 flex flex-col gap-4">
      <div>
        <h4 className="font-bold text-primary">Welcome back!</h4>
        <span>{currentDateToDisplay}</span>
      </div>
      <section className="grid grid-cols-3 gap-4 w-full">
        <aside className="flex p-4 bg-white rounded-xl flex-col gap-4">
          <h4 className="font-bold text-primary">Contents</h4>
          <div className="p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Landing Page</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-3 p-3">
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Hello Section")}
                      className={
                        selectedPage === "Hello Section" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Hello Section</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("About us")}
                      className={
                        selectedPage === "About us" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- About us</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Destinations")}
                      className={
                        selectedPage === "Destinations" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Destinations</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Services")}
                      className={
                        selectedPage === "Services" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Services</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Cars Booking")}
                      className={
                        selectedPage === "Cars Booking" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Cars Booking</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Gallery")}
                      className={
                        selectedPage === "Gallery" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Gallery</p>
                      </div>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>About us</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-3 p-3">
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Overview")}
                      className={
                        selectedPage === "Overview" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Overview</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Destinations")}
                      className={
                        selectedPage === "Destinations" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Destinations</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Our Story")}
                      className={
                        selectedPage === "Our Story" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Our Story</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      onClick={() => handlePageChange("Gallery")}
                      className={
                        selectedPage === "Gallery" ? "text-accent font-bold underline underline-offset-4" : ""
                      }
                    >
                      <div className="flex gap-2 items-center">
                        
                        <p>- Gallery</p>
                      </div>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Cars</AccordionTrigger>
                <AccordionContent>
                  <Link href="#" onClick={() => handlePageChange("Cars")}>
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Activities</AccordionTrigger>
                <AccordionContent>
                  <Link href="#" onClick={() => handlePageChange("Activities")}>
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Destination Marketing</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="#"
                    onClick={() => handlePageChange("Destination Marketing")}
                  >
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>
        <div className="bg-white rounded-xl col-span-2">
          <ContentOverview selectedPage={selectedPage} />
        </div>
      </section>
    </main>
  );
}
