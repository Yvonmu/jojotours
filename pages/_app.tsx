import RootLayout from "@/components/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Dashboard from "@/components/molecules/Dashboard";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return isAdminRoute ? (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  ) : (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
