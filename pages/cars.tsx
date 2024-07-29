/* eslint-disable @next/next/no-img-element */
import { CarsData } from "@/utils/carsData";
import { Book, BookCheck, Car, CircleCheckBig, Repeat } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cars() {
  const [sortOption, setSortOption] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [carType, setCarType] = useState<string>("");

  const filterCars = (cars: typeof CarsData) => {
    return cars.filter((car) => {
      let inPriceRange = true;
      let isType = true;

      if (priceRange) {
        const [minPrice, maxPrice] = priceRange
          .split("-")
          .map((price) => parseInt(price, 10));
        const carPrice = parseInt(car.price.replace(/,/g, ""), 10);
        inPriceRange = carPrice >= minPrice && carPrice <= maxPrice;
      }

      if (carType) {
        isType = car.type === carType;
      }

      return inPriceRange && isType;
    });
  };

  const sortedCars = filterCars(CarsData).sort((a, b) => {
    switch (sortOption) {
      case "name":
        return a.name.localeCompare(b.name);
      case "type":
        return a.type.localeCompare(b.type);
      case "category":
        return a.category.localeCompare(b.category);
      case "price":
        return (
          parseInt(a.price.replace(/,/g, ""), 10) -
          parseInt(b.price.replace(/,/g, ""), 10)
        );
      default:
        return 0;
    }
  });
  return (
    <main>
      <section className="flex justify-center w-full">
        <div className="w-[80%] py-16 flex-col flex gap-20">
          <div>
            {" "}
            <div className="flex justify-center items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              Available Cars
            </div>
            <h1 className="text-center text-accent">
              Choose from a wide range of available cars
            </h1>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex justify-between flex-wrap">
              <div className="flex gap-4 items-center">
                <h4 className="font-bold">Available Cars</h4>
                <div className="py-1 px-2 text-sm bg-muted rounded-xl">{sortedCars.length}</div>
              </div>
              <div className="flex gap-12 items-center">
                <div className="bg-muted">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="">Price Range</option>
                    <option value="25000-30000">25,000-30,000Rwf/day</option>
                    <option value="30000-50000">30,000-50,000Rwf/day</option>
                    <option value="50000-75000">50,000-75,000Rwf/day</option>
                  </select>
                </div>
                <div className="bg-muted">
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="">Car Type</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="semi-automatic">Semi-Automatic</option>
                  </select>
                </div>
                <div className="bg-muted">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="category">Category</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-12">
              {sortedCars.length === 0 ? (
                <div className="col-span-full text-center">
                  <p>No cars available matching the selected criteria.</p>
                </div>
              ) : (
                sortedCars.map((item: any, index: number) => (
                  <Link
                    href="#"
                    key={index}
                    className=""
                    style={{
                      borderBottomWidth: 0,
                      backgroundImage: "none",
                      transition: "none",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col gap-2 cursor-pointer"
                    >
                      <p className="font-bold">{item.name}</p>
                      <div className="h-40 w-full">
                        <img
                          src={item.imageUrl}
                          alt={`${item.name}'s photo`}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </div>
                      <div className="flex gap-4 items-center justify-between">
                        <div className="flex items-center text-sm gap-1 capitalize">
                          <Repeat className="" />
                          {item.type}
                        </div>
                        <p className="font-bold text-sm">
                          {item.price}{" "}
                          <span className="text-gray-300">Rwf/day</span>
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))
              )}
            </div>
          </div>
          <div>
          <div className="">
            {" "}
            <div className="flex justify-center items-center gap-4 text-secondary ">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              How it works
            </div>
            <h1 className="text-center text-accent">
              Choose from a wide range of available cars
            </h1>
          </div>
          <div className="md:px-16 grid md:grid-cols-3 gap-4">
            <div className="flex gap-4 items-center shadow-xl rounded-xl p-8 w-3/4">
                <div className="p-3 bg-muted rounded-xl"><CircleCheckBig className="text-accent"/></div>
                <div>
                    <p className="text-accent font-bold">Select:</p>
                    <p className="text-sm">Choose from a wide range of available cars</p>
                </div>
            </div>
            <div className="flex gap-4 items-center shadow-xl rounded-xl p-8 w-3/4">
                <div className="p-3 bg-muted rounded-xl"><BookCheck className="text-accent"/></div>
                <div>
                    <p className="text-accent font-bold">Book:</p>
                    <p className="text-sm">Confirm your reservation with a few clicks.</p>
                </div>
            </div>
            <div className="flex gap-4 items-center shadow-xl rounded-xl p-8 w-3/4">
                <div className="p-3 bg-muted rounded-xl"><Car className="text-accent"/></div>
                <div>
                    <p className="text-accent font-bold">Drive:</p>
                    <p className="text-sm">Pick up your car and enjoy your trip.</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
