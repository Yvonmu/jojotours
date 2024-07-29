import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { ActivitiesData } from "@/utils/activitiesData";
import { Button } from "@/components/ui/button";
import ActivitiesTab from "@/components/molecules/ActivitiesTab";

export default function Activities() {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(ActivitiesData[0].name);

  useEffect(() => {
    const { tab } = router.query;
    if (typeof tab === "string") {
      setActiveTab(tab);
    }
  }, [router.query]);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <main>
      <section className="flex justify-center py-16">
        <div className="w-[80%] flex flex-col gap-4">
          <div>
            <div className="flex justify-center items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              Unveil the Beauty of Rwanda
            </div>
            <h1 className="text-center">
            Our responsible tourism practices help preserve the environment and support local communities.

            </h1>
          </div>
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {ActivitiesData.map((item: any, index: number) => (
                <motion.div className="" key={index}>
                  <Button
                    onClick={() => handleTabClick(item.name)}
                    className={`m-4 ${activeTab === item.name ? 'bg-accent' : 'bg-transparent border border-accent text-primary hover:text-white'}`}
                    >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Slider>
            <div className="flex justify-end">
              <div className="absolute z-40 flex justify-end items-center top-1/2 transform -translate-y-1/2">
                <div
                  className="bg-white shadow-xl rounded-full h-[55px] w-[55px] border flex items-center justify-center cursor-pointer"
                  onClick={next}
                >
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>
          {activeTab && (
            <div>
              <ActivitiesTab tabName={activeTab} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
