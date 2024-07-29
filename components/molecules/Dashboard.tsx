import withAuth, { WithAuthProps } from "@/utils/withAuth";
import {
  ArrowDown,
  HandCoins,
  LayoutDashboard,
  MailQuestion,
  SquareActivity,
  Layers,
  Podcast,
  Car,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

interface LoadingState {
  [key: string]: boolean;
}
interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps & WithAuthProps> = ({
  user,
  children,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const modifiedChildren = React.Children.map(children, (child) => {
    const modifiedChild = React.cloneElement(child as React.ReactElement, {
      user,
    });
    return modifiedChild;
  });
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    router.push("/");
  };

  const isAdmin = user?.role === "admin";
  const canEdit = user?.permissions.includes("edit");
  return (
    <main className="flex justify-center bg-gray-100">
      <section className="w-[70%]">
        <nav className="bg-white p-4 flex justify-between items-center border-b-2 shadow-sm px-2">
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
                router.pathname === "/admin"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <LayoutDashboard /> Overview
            </Link>
            <Link
              href={"/admin/query"}
              className={`${
                router.pathname === "/admin/query"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <MailQuestion /> Query
            </Link>
            <Link
              href={"/admin/reviews"}
              className={`${
                router.pathname === "/admin/reviews"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <HandCoins /> Reviews
            </Link>
            <Link
              href={"/admin/blog"}
              className={`${
                router.pathname === "/admin/blog"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <SquareActivity /> Blogs
            </Link>
            <Link
              href={"/admin/cars"}
              className={`${
                router.pathname === "/admin/cars"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <Car /> Cars
            </Link>
            <Link
              href={"/admin/contents"}
              className={`${
                router.pathname === "/admin/contents"
                  ? "bg-accent text-white font-bold"
                  : "border border-accent"
              } flex items-center gap-2 rounded-xl px-4 py-2`}
            >
              <Podcast /> Contents
            </Link>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-muted text-secondary font-bold"
                  >
                    <div className="flex gap-2 items-center">
                      <div>MY</div>
                      <ArrowDown />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href={""}
                        className="relative w-full flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={"/admin/users"}
                        className="relative w-full flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        <span>Users</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href={"#"}
                      onClick={handleLogout}
                      className="relative w-full flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
        <div className="">{modifiedChildren}</div>
      </section>
    </main>
  );
};

export default withAuth(Dashboard);
