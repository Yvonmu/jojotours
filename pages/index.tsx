/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Torus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DestinationMarketData, Cars } from "@/utils/destination_market";
import { ServicesData } from "@/utils/servicesData";
import { ActivitiesDetails } from "@/utils/activitiesData";
import { CarsData } from "@/utils/carsData";
import { GalleryData } from "@/utils/galleryData";
export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
    }
  }, []);

  const responsiveSettings: ResponsiveObject[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const sliderSettings: Settings = {
    // Your other settings
    responsive: responsiveSettings,
  };

  const sliderRef1 = useRef<Slider>(null);
  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
    }
  }, []);

  const responsiveSettings1: ResponsiveObject[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const sliderSettings1: Settings = {
    // Your other settings
    responsive: responsiveSettings1,
  };
  return (
    <main>
      <section
        className="grid xl:py-4 md:px-16 p-4 xl:px-40 place-items-center h-[80vh] text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url("/images/image 4.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center xl:w-1/2 grid gap-4">
          <div className="flex justify-center items-center gap-4 text-white">
            <hr className="w-16 rounded-tl-xl h-2 bg-white" />
            Explore Rwanda
          </div>
          <h1 className="text-white">
            No matter what <span className="text-accent">adventure</span> you
            are looking for, we have a tour for you.
          </h1>
          <div className="flex sm:flex-wrap justify-center gap-8">
            <Button
              onClick={() => {
                window.location.href = "/about_us#contact_us";
              }}
              className="px-12 border border-white"
            >
              Reach to us
            </Button>
            <Button
              onClick={() => {
                window.location.href = "#services";
              }}
              className="bg-transparent border border-white px-12"
            >
              Services
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <section className="grid xl:grid-cols-2 gap-16 w-[80%] py-16">
          <div className="relative h-full w-full">
            <div className="flex place-items-center gap-8 z-20 relative">
              <div className="h-1/2 w-1/2">
                <img
                  src={"/images/Rectangle 3.png"}
                  className="bg-cover h-full w-full rounded-xl"
                  alt="jojo tours logo"
                />
              </div>{" "}
              <div className="flex flex-col w-1/2 gap-8">
                <div className="">
                  <img
                    src={"/images/Rectangle 4.png"}
                    className="bg-cover h-full w-full rounded-xl"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="">
                  <img
                    src={"/images/7 1.png"}
                    className="bg-cover h-full w-full rounded-xl"
                    alt="jojo tours logo"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-secondary h-1/2 w-1/2 rounded-xl" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              About us
            </div>
            <h2>Your Trusted Travel Partner</h2>
            <p>
              <span className="font-bold">JOJO Tours Ltd</span> is dedicated to
              providing exceptional travel experiences in Rwanda. Our passion
              for exploration and commitment to excellence ensures that every
              adventure with us is unique and memorable.
            </p>
            <p>
              At <span className="font-bold">JOJO Tours Ltd,</span> we
              specialize in promoting Rwanda as a premier travel destination.
              Our destination marketing efforts highlight the country&#39;s
              natural beauty, rich cultural heritage, and unique wildlife. We
              collaborate with local communities, businesses, and tourism boards
              to create compelling campaigns that attract travelers from around
              the world. Our goal is to showcase the diverse experiences Rwanda
              has to offer, from the bustling streets of Kigali to the serene
              landscapes of national parks. Let us help you discover the hidden
              gems of Rwanda and create lasting memories on your next adventure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted flex flex-col items-center p-4 rounded-xl">
                <h4 className="font-bold">8+</h4>
                <p className="text-center">Destinations</p>
              </div>
              <div className="bg-muted flex flex-col items-center p-4 rounded-xl">
                <h4 className="font-bold">4+</h4>
                <p className="text-center">Years of experiences</p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  window.location.href = "/about_us";
                }}
              >
                Know more <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      </section>
      <section className="flex justify-center bg-muted w-full">
        <section className="w-[80%] flex flex-col gap-8 py-16">
          <div className="flex xl:justify-center items-center gap-4 text-secondary">
            <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
            Unveil the Beauty of Rwanda
          </div>
          <div className="flex xl:justify-center">
            <h2 className="text-primary xl:text-center xl:w-1/2">
              Discover the diverse landscapes, rich wildlife, and vibrant
              culture of Rwanda.
            </h2>
          </div>
          <div className="md:grid xl:grid-cols-2 flex flex-col w-full md:gap-16 gap-8">
            <div className="h-full w-full flex flex-col gap-4">
              <div
                className="xl:h-full h-40 md:w-full rounded-xl"
                style={{
                  backgroundImage: `url(${ActivitiesDetails[0].imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="font-bold">{ActivitiesDetails[0].name}</p>
              <span>{ActivitiesDetails[0].description}</span>
            </div>
            <div className="md:grid flex flex-col gap-8">
              <div className="md:flex gap-4">
                <div className="md:h-[100px] md:w-[300px]">
                  <img
                    src={ActivitiesDetails[1].imageUrl}
                    className="bg-cover rounded-xl h-full w-full"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{ActivitiesDetails[1].name} </p>
                  <span>{ActivitiesDetails[1].description}</span>
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="md:h-[100px] md:w-[300px]">
                  <img
                    src={ActivitiesDetails[2].imageUrl}
                    className="bg-cover rounded-xl h-full w-full object-center"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{ActivitiesDetails[2].name} </p>
                  <span>{ActivitiesDetails[2].description}</span>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => {
                    window.location.href = "/activities";
                  }}
                >
                  Explore more <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="flex justify-center w-full py-16">
        <div className="w-[80%] flex flex-col md:gap-8 gap-4">
          <div className="flex items-center gap-4 text-secondary">
            <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
            Destination Marketing
          </div>
          <div className="md:flex justify-between items-end">
            <div>
              <h1>Top Travel Destinations</h1>
              <span>
                Explore the best of Rwanda with our top travel destinations:
              </span>
            </div>
            <div
              className="div md:pt-4"
              style={{
                display: "flex",
                justifyContent: "end",
                padding: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    // borderRadius: 7,
                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                    cursor: "pointer",
                  }}
                  className="buttons rounded-full"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <IoIosArrowBack />
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // borderRadius: 7,
                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                    cursor: "pointer",
                  }}
                  className="buttons rounded-full"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Slider
              // dotsClassName="slick-dots line-indicator"
              ref={sliderRef}
              slidesToShow={4}
              slidesToScroll={1}
              infinite={true}
              lazyLoad="ondemand"
              autoplay
              autoplaySpeed={4000}
              speed={2000}
              customPaging={(i) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "-10px",
                    opacity: 0,
                  }}
                >
                  {i}
                </div>
              )}
              {...sliderSettings}
            >
              {DestinationMarketData.map((card: any, index: number) => (
                <div
                  className="cardReason h-[300px] group"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="image"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div className="text w-full px-2 flex flex-col gap-4">
                      {hoveredIndex === index && (
                        <div className="border border-white rounded-lg">
                          <p className="font-bold capitalize text-[yellow] text-center mb-2">
                            {card.title}
                          </p>
                          <p className="text-sm text-center text-white">
                            {card.description[0]}
                          </p>
                        </div>
                      )}
                    </div>

                    <img
                      src={card.imageUrl ? card.imageUrl : ""}
                      alt="image"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                      }}
                    />

                    <p className="font-bold text-primary p-2 capitalize">
                      {card.title}
                    </p>
                  </div>
                  <div className="overlay"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="flex justify-center w-full py-16 bg-muted"
        style={{
          backgroundImage: `url("/icons/pattern.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] grid xl:grid-cols-3 place-items-center gap-8">
          <div>
            <h1>
              Our <br />
              Best Services
            </h1>
            <p>
              we pride ourselves on offering the best services to make your
              journey unforgettable.
            </p>
          </div>
          <div className="xl:col-span-2 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {ServicesData.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex gap-4">
                <div className="">
                  <div className="rounded-full bg-muted p-2 text-accent">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <p className="font-bold">{service.title}</p>
                  <span>{service.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full py-16">
        <div className="md:w-[70%] w-[80%] md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-16">
          <div
            style={{
              backgroundImage: `url("/images/image 4.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="p-2 grid place-items-end rounded-xl md:h-auto h-[50vh]"
          >
            <div className="bg-white rounded-xl flex gap-2 p-4">
              <div className="bg-accent rounded-xl p-2 grid place-items-center">
                <Key className="text-white" />
              </div>
              <div>
                <span className="font-bold">
                  From Kigali to the countryside: Drive with Ease.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 py-2">
            <h2>Travel at Your Pace</h2>
            <p>
              Simplify your journey with our convenient car booking service.
            </p>
            <div className="">
              <Slider
                // dotsClassName="slick-dots line-indicator"
                ref={sliderRef1}
                slidesToShow={3}
                slidesToScroll={1}
                infinite={true}
                lazyLoad="ondemand"
                autoplaySpeed={4000}
                speed={2000}
                customPaging={(i) => (
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: "-10px",
                      opacity: 0,
                    }}
                  >
                    {i}
                  </div>
                )}
                {...sliderSettings1}
              >
                {CarsData.map((card: any, index: number) => (
                  <div className="p-2 h-[200px] group" key={index}>
                    <div
                      className=""
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={card.imageUrl ? card.imageUrl : ""}
                        alt="image"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex pr-8 justify-between">
              <div>
                <Button
                  onClick={() => {
                    window.location.href = "/cars";
                  }}
                >
                  Explore more <ArrowRight />
                </Button>
              </div>
              <div
                className="div pt-4"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0 10px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                      // borderRadius: 7,
                      boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                      cursor: "pointer",
                    }}
                    className="buttons rounded-full"
                    onClick={() => sliderRef1.current?.slickPrev()}
                  >
                    <IoIosArrowBack />
                  </div>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // borderRadius: 7,
                      boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                      cursor: "pointer",
                    }}
                    className="buttons rounded-full"
                    onClick={() => sliderRef1.current?.slickNext()}
                  >
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full py-16">
        <div className="w-[80%] grid place-items-center">
          <h2>Capture the Adventure</h2>
          <p className="xl:w-1/2 text-center">
            Explore our gallery to witness the breathtaking beauty of Rwanda
            through the eyes of our travelers. Each photo tells a story of
            adventure, culture, and natural wonder.
          </p>
          {/* gallery  */}
          <section className="w-full bg-white">
            <div className="py-4 px-2 w-full sm:py-4 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-full">
                <div className=" bg-stone-50">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                    <img
                      src={GalleryData[0]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </div>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                      <img
                        src={GalleryData[1]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    </div>
                    <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                      <img
                        src={GalleryData[2]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-sky-50 h-auto md:h-full flex flex-col">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img
                      src={GalleryData[3]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Button
              onClick={() => {
                window.location.href = "/gallery";
              }}
            >
              Explore more <ArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
