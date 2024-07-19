import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  useEffect(() => {
    const handleRouteChange = () => {
      setIsSheetOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <nav className="w-full shadow-xl border xl:py-4 md:px-16 p-4 xl:px-40 items-center flex justify-between">
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
      <div className="hidden xl:flex gap-8 items-center font-[400px]">
        <Link
          href={"/"}
          className={`${
            router.pathname === "/" ? "text-accent font-bold" : ""
          } `}
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className={`${
            router.pathname === "/services" ? "text-accent font-bold" : ""
          } `}
        >
          Service
        </Link>
        <Link
          href={"/activities"}
          className={`${
            router.pathname === "/activities" ? "text-accent font-bold" : ""
          } `}
        >
          Activities
        </Link>
        <Link
          href={"/destination_marketing"}
          className={`${
            router.pathname === "/destination_marketing" ? "text-accent font-bold" : ""
          } `}
        >
          Destination Marketing
        </Link>
        <Link
          href={"/about_us"}
          className={`${
            router.pathname === "/about_us" ? "text-accent font-bold" : ""
          } `}
        >
          About us
        </Link>
        <Link href={"contact_us"} onClick={handleLinkClick}></Link><Button   onClick={() => console.log("Button clicked")}>Reach to us</Button>
      </div>
      <nav className="xl:hidden ">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline"><AlignJustify/></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="w-3/4">
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
              </SheetTitle>
              <SheetDescription>DNA.slogan</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 py-4 text-black">
            <div><Link
          href={"/"}
          className={`${
            router.pathname === "/" ? "text-accent font-bold" : ""
          } `}
        >
          Home
        </Link></div><div>
        <Link
          href={"/services"}
          className={`${
            router.pathname === "/services" ? "text-accent font-bold" : ""
          } `}
        >
          Service
        </Link></div><div>
        <Link
          href={"/activities"}
          className={`${
            router.pathname === "/activities" ? "text-accent font-bold" : ""
          } `}
        >
          Activities
        </Link></div><div>
        <Link
          href={"/destination_marketing"}
          className={`${
            router.pathname === "/destination_marketing" ? "text-accent font-bold" : ""
          } `}
        >
          Destination Marketing
        </Link></div><div>
        <Link
          href={"/about_us"}
          className={`${
            router.pathname === "/about_us" ? "text-accent font-bold" : ""
          } `}
        >
          About us
        </Link></div>
        <Link href={"contact_us"} onClick={handleLinkClick}></Link><Button   onClick={() => console.log("Button clicked")}>Reach to us</Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </nav>
  );
}
