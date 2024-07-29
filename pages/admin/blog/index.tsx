/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/formatDate";
import axios from "axios";
import { ArrowRight, Plus, Rss } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";

export default function BlogPage() {
  const currentDateToDisplay = formatDate();
  // const specificDateToDisplay = '2024-06-17T10:00:00';
  // <p>{formatDate(specificDateToDisplay)}</p>
  const [formDataList, setFormDataList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<any[]>("/api/blog");
        setFormDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className="py-16 flex flex-col gap-8">
          <section className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-primary">Welcome back!</h3>
              <span>{currentDateToDisplay}</span>
            </div>
            <div className="bg-white rounded-xl p-8 flex items-center gap-4">
              <div className="bg-muted p-4 rounded-xl">
                <Rss />
              </div>
              <div>
                <p className="font-bold">Blogs</p>
                <h3 className="font-bold">{formDataList.length}</h3>
              </div>
            </div>
            <Link
              href={"./blog/addBlog"}
              className="bg-white rounded-xl p-8 items-center flex flex-col gap-4"
            >
              <div className="border border-accent p-1 rounded-full">
                <Plus className="" />
              </div>
              <div>
                <p className="font-bold">Add new blog</p>
              </div>
            </Link>
          </section>
          <section className="flex flex-col gap-8">
            <h4 className="font-bold">All blogs</h4>
            <div className="grid md:grid-cols-2 gap-16">
              {formDataList.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="h-[30vh]">
                    <img
                      src={item.imageUrl}
                      className="object-cover h-full w-full rounded-xl"
                      alt={`${item.name}'s Image`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="rounded-xl bg-muted px-4 py-2">
                      {formatDate(item.createAt)}
                    </span>
                    <p className="font-bold">{item.name} </p>
                    <p>{item.description}</p>
                    <div className="flex justify-between flex-wrap">
                      <Button
                        variant={"outline"}
                        className="text-secondary hover:text-white gap-2 flex items-center"
                      >
                        Edit Post <ArrowRight />
                      </Button>
                      <Button
                        variant={"outline"}
                        className="text-secondary hover:text-white gap-2 flex items-center"
                      >
                        Read More <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[30vh]">
                  <img
                    src={"/images/Rectangle 3.png"}
                    className="object-cover h-full w-full rounded-xl"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="">
                  <span>Feb 14 2024</span>
                  <p className="font-bold">
                    The Role of consulting in stramining operations
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex justify-between flex-wrap">
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Edit Post <ArrowRight />
                    </Button>
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Read More <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[30vh]">
                  <img
                    src={"/images/Rectangle 3.png"}
                    className="object-cover h-full w-full rounded-xl"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="">
                  <span>Feb 14 2024</span>
                  <p className="font-bold">
                    The Role of consulting in stramining operations
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex justify-between flex-wrap">
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Edit Post <ArrowRight />
                    </Button>
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Read More <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[30vh]">
                  <img
                    src={"/images/Rectangle 3.png"}
                    className="object-cover h-full w-full rounded-xl"
                    alt="jojo tours logo"
                  />
                </div>
                <div className="">
                  <span>Feb 14 2024</span>
                  <p className="font-bold">
                    The Role of consulting in stramining operations
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex justify-between flex-wrap">
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Edit Post <ArrowRight />
                    </Button>
                    <Button
                      variant={"outline"}
                      className="text-secondary hover:text-white gap-2 flex items-center"
                    >
                      Read More <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
