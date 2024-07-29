import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ReviewsData } from "@/utils/reviews";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, PlusCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function About_Us() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const reviewData = {
      name,
      location,
      review,
      profileUrl,
    };

    try {
      const response = await fetch("/api/review_api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success (e.g., show a success message, reset form)
      toast.success("Review submitted successfully!");
      setName("");
      setLocation("");
      setReview("");
      setProfileUrl("");
    } catch (error) {
      // Handle error (e.g., show an error message)
      toast.error("There was a problem submitting your review");
      console.error("There was a problem with the fetch operation:", error);
    }
  };

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

  const formSchema = z.object({
    names: z.string().min(5).trim(),
    email: z.string().min(5).trim(),
    message: z.string().min(5).trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      names: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const submissionResponse = await axios.post(`/api/query`, {
        name: values.names,
        email: values.email,
        message: values.message,
      });

      const emailHTML = `
    <div style="">
      <p>Greeting Dear Samen General Trading Ltd Team,</p>
      <p>${values.message}</p>
      <p>Have a great and productive day!</p>
      
      <p>Best Regards,<br> ${values.names}</p>
      ${values.email}
      <img src="https://www.samengt.com/images/mail.png" alt="Company Logo" style="max-width: 100px; margin-bottom: 20px;">
    </div>
    `;

      // Send reply email with attachment
      await axios.post("/api/send-query", {
        to: "infodesk@samengt.com",
        subject: "Website Inquiry | SAMEN",
        text: "",
        html: emailHTML,
      });
      toast.success("Form data submitted successfully!");
      form.reset();
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        toast.error(error.response.data);
      } else {
        toast.error("An unexpected error occurred");
      }
      toast.error("Failed to upload images:");
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" py-16">
      <section className="flex justify-center w-full">
        <div className="grid xl:grid-cols-2 gap-16 w-[80%]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              About us
            </div>
            <h2 className="">
              your gateway to unforgettable adventures in Rwanda
            </h2>
            <p>
              <span className="font-bold">JOJO Tours Ltd</span> is a premier
              travel company based in Kigali, Rwanda, operating from YYUSSA
              Plaza, Remera. We pride ourselves on our extensive range of
              services and our commitment to providing unforgettable
              experiences. Our slogan,{" "}
              <span className="italic">
                &#34;No matter what adventure you are looking for, we have a
                tour for you,&#34;
              </span>{" "}
              encapsulates our mission to cater to every traveler’s needs.
              Whether you&#39;re seeking serene landscapes, thrilling
              adventures, or cultural immersion, JOJO Tours Ltd is your trusted
              partner in exploration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <img
                src={"/images/Rectangle 3.png"}
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
      </section>
      <section className="flex justify-center w-full">
        <div className="w-[80%] flex flex-col gap-4 py-16">
          <div className="flex xl:justify-center items-center gap-4 text-secondary">
            <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
            Our Story
          </div>
          <div className="flex xl:justify-center">
            <h2 className="text-accent md:text-center md:w-1/2">
              Discover Rwanda With Us: Your Journey, Our Passion
            </h2>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-3 md:gap-4 gap-2 w-full">
            <div className="h-[30vh] w-full">
              <img
                src="/images/image 4.png"
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="md:col-span-2 h-[30vh] w-full">
              <img
                src="/images/zebra.jpg"
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="h-[30vh] w-full">
              <img
                src="/images/Rectangle 4.png"
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-secondary">
                <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
                Journey Begins
              </div>
              <p>
                Our journey began with a passion for exploration and a desire to
                share the beauty of Rwanda with the world. From the majestic
                mountain gorillas to the vibrant city life of Kigali, we
                envisioned a travel company that offers unique and personalized
                experiences. Starting with a small team of dedicated
                professionals, JOJO Tours Ltd has grown into a reputable name in
                the tourism industry, known for our exceptional service and
                comprehensive tour packages.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-secondary">
                <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
                Driven By Excellence
              </div>
              <p>
                At JOJO Tours Ltd, excellence is not just a goal; it’s a driving
                force. Our commitment to quality and customer satisfaction is
                reflected in every tour we organize. We continuously strive to
                exceed expectations, ensuring that every adventure is
                meticulously planned and executed. Our team of experienced
                guides, drivers, and travel experts work tirelessly to provide
                you with the best possible experience, whether you&#39;re
                exploring the lush rainforests or the rich cultural heritage of
                Rwanda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="reviews"
        className="flex justify-center w-full py-16 bg-muted"
        style={{
          backgroundImage: `url("/icons/pattern.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] flex flex-col gap-4">
          <div className="flex capitalize xl:justify-center items-center gap-4 text-secondary">
            <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
            Testimonials from our travelers
          </div>
          <div className="flex xl:justify-center">
            <h2 className="text-accent md:text-center md:w-3/4">
              Discover the beauty of Rwanda through real experiences
            </h2>
          </div>
          <div className="">
            <Slider
              // dotsClass="slick-dots line-indicator"
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
              {ReviewsData.map((data: any, index: number) => (
                <div
                  className="cardReason h-[300px] group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <div
                    className="image"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div className="w-full px-8 flex flex-col gap-4">
                      {hoveredIndex === index ? (
                        <div className="border text1 w-[90%] bg-secondary border-white rounded-lg">
                          <p className="font-bold text-white p-2 capitalize">
                            {data.name}
                          </p>
                          <p className="text-sm text-white/90">
                            From {data.location}
                          </p>
                          <span className="text-white/90 text-sm px-2">
                            {data.review}
                          </span>
                        </div>
                      ) : (
                        <div className="text1 w-[90%] bg-black bg-opacity-50 rounded-xl p-4">
                          <p className="font-bold text-white p-2 capitalize text-center">
                            {data.name}
                          </p>
                          <p className="text-sm text-white/90">
                            From {data.location}
                          </p>
                        </div>
                      )}
                    </div>
                    <img
                      src={data.imageUrl ? data.imageUrl : ""}
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
            <div
              className="div pt-4 gap-4"
              style={{
                display: "flex",
                justifyContent: "end",
                padding: "0 10px",
              }}
            >
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex gap-4 justify-center">
                      Review us <PlusCircle />{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Review Submission Form </DialogTitle>
                      <DialogDescription>Submit Your Review </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Pedro Duarte"
                          className="col-span-3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                          From{" "}
                          <span className="text-sm text-gray-300">
                            (Location)
                          </span>
                        </Label>
                        <Input
                          id="location"
                          placeholder="Rwanda"
                          className="col-span-3"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="profile" className="text-right">
                          Profile{" "}
                          <span className="text-sm text-gray-300">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="profile"
                          type="file"
                          className="col-span-3"
                          value={profileUrl}
                          onChange={(e) => setProfileUrl(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="review" className="text-right">
                          Review Text
                        </Label>
                        <Textarea
                          rows={3}
                          id="review"
                          placeholder="Review"
                          className="col-span-3"
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                      </div>

                      <DialogFooter>
                        <Button type="submit">Save review</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
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
                    width: 40,
                    height: 40,
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
        </div>
      </section>
      <section id="contact_us" className="flex justify-center w-full py-16">
        <div className="w-[80%] grid md:grid-cols-2 place-items-center md:gap-16 gap-4">
          <div className="md:w-3/4 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-secondary">
              <hr className="w-16 rounded-tl-xl h-2 bg-secondary" />
              Contact us
            </div>
            <h2>Get In touch for your adventure</h2>
            <p>
              Our dedicated team is here to assist you with all your travel
              needs or queries.
            </p>
            <div className="flex gap-2 items-center text-2xl">
              <Link
                href={"https://www.instagram.com/jojotours.ltd/"}
                target="_blank"
                className="bg-secondary text-white rounded-full p-2"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://www.facebook.com/jojolyne2022"}
                target="_blank"
                className="bg-secondary text-white rounded-full p-2"
              >
                <FaFacebook />
              </Link>
              <Link
                href={"tel:+250788312294"}
                target="_blank"
                className="bg-secondary text-white rounded-full p-2"
              >
                <Phone />
              </Link>
              <Link
                href={"mailto:jojotours2023@gmail.com"}
                target="_blank"
                className="bg-secondary text-white rounded-full p-2"
              >
                <Mail />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <h2>Send Us A Message</h2>
            <Form {...form}>
              <div className="flex flex-col gap-4">
                <Toaster position="top-center" reverseOrder={false} />
                <FormField
                  control={form.control}
                  name="names"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="someone@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea rows={5} placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="my-4 text-white font-bold mr-4"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Send Message"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
