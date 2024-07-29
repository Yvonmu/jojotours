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
    <header className=" z-40 sticky top-0 ">
      <nav className="bg-white w-full shadow-xl border xl:py-3 md:px-16 p-3 xl:px-40 items-center flex justify-between">
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
              router.pathname === "/"
                ? "text-accent font-bold underline underline-offset-4"
                : ""
            } `}
          >
            Home
          </Link>
          <Link
            href={"/about_us"}
            className={`${
              router.pathname === "/about_us"
                ? "text-accent font-bold underline underline-offset-4"
                : ""
            } `}
          >
            About us
          </Link>
          <Link
            href={"/cars"}
            className={`${
              router.pathname === "/cars"
                ? "text-accent font-bold underline underline-offset-4"
                : ""
            } `}
          >
            Cars
          </Link>
          <Link
            href={"/activities"}
            className={`${
              router.pathname === "/activities"
                ? "text-accent font-bold underline underline-offset-4"
                : ""
            } `}
          >
            Activities
          </Link>
          <Link
            href={"/destination_marketing"}
            className={`${
              router.pathname === "/destination_marketing"
                ? "text-accent font-bold underline underline-offset-4"
                : ""
            } `}
          >
            Destination Marketing
          </Link>

          <Link href={"/about_us/#contact_us"} onClick={handleLinkClick}>
            <Button onClick={() => console.log("Button clicked")}>
              Reach to us
            </Button>
          </Link>
        </div>
        <nav className="xl:hidden ">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">
                <AlignJustify className="hover:text-white" />
              </Button>
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
                <SheetDescription>No matter what adventure you are looking for, we have a tour for you</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-4 text-black">
                <div>
                  <Link
                    href={"/"}
                    className={`${
                      router.pathname === "/"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/about_us"}
                    className={`${
                      router.pathname === "/about_us"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    About us
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/cars"}
                    className={`${
                      router.pathname === "/cars"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    Cars
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/activities"}
                    className={`${
                      router.pathname === "/activities"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    Activities
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/destination_marketing"}
                    className={`${
                      router.pathname === "/destination_marketing"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    Destination Marketing
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/gallery"}
                    className={`${
                      router.pathname === "/gallery"
                        ? "text-accent font-bold underline underline-offset-4"
                        : ""
                    } `}
                  >
                    Gallery
                  </Link>
                </div>
                <Link href={"/about_us/#contact_us"} onClick={handleLinkClick}>
                  <Button onClick={() => console.log("Button clicked")} className="w-full">
                    Reach to us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </nav>
    </header>
  );
}
