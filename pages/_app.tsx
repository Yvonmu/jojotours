import RootLayout from "@/components/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<RootLayout><Component {...pageProps} /></RootLayout>);
}
