import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { decodeToken } from "@/lib/jwt";
import Link from "next/link";

export interface WithAuthProps {
  user: any | null;
}

type WrappedComponentType<P> = React.ComponentType<P & WithAuthProps>;

export default function withAuth<P>(
  WrappedComponent: WrappedComponentType<P>
) {
  return function WithAuth(props: P) {
    const [user, setUser] = useState<any | null>(null);
    const [isTokenValid, setIsTokenValid] = useState(true);
    const router = useRouter();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("user_session");
        if (!token) {
          router.push("/");
          return;
        }
        const decodedUser = decodeToken(token);
        if (!decodedUser) {
          localStorage.removeItem("user_session");
          router.push("/"); // Redirect to login page if token is invalid
          return;
        }
        if (decodedUser.exp && decodedUser.exp * 1000 < Date.now()) {
          // Token is expired
          setIsTokenValid(false);
          localStorage.removeItem("user_session");
          router.push("/");
          return;
        }
        setUser(decodedUser);
      }
    }, [router]);
    
    if (!user) {
      // Redirect user if not authenticated
      return null; // or any other loading indicator
    }

    if (!isTokenValid) {
      // Token is expired
      return (
        <div className="bg-[red]">
          <p>Your session has expired. Please <Link href="/" className="underline text-primary">login</Link> again.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} user={user} />;
  };
}
