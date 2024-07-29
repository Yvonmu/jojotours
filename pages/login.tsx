// pages/client
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Input from "@/components/atoms/Input";
import useLogin from "@/hooks/useLogin";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { errors, touched, getFieldProps, values, loading, onSubmit } =
    useLogin();

  useEffect(() => {
    const userSessionToken = localStorage.getItem("user_session");
    if (userSessionToken) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Login | GHA</title>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description here" />
        <meta name="keywords" content="keywords, for, your, website" />
        <meta name="author" content="Elite-HYO Group Ltd | Yvon Mutuyeyezu" />
        {/* Add more meta tags as needed */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Add more link tags for additional resources like stylesheets */}

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Your website description here"
        />
        <meta property="og:url" content="https://greenhillsacademy.rw" />
        {/* Add more Open Graph meta tags as needed */}

        {/* Twitter meta tags */}
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="Your website description here"
        />
        <meta name="twitter:url" content="https://yourwebsite.com" />
      </Head>
      <main>
        <div className="w-full h-screen grid place-items-center">
          <div className="md:w-1/2 p-28 bg-white shadow-xl">
            <div className="mb-8 rounded-[32px] py-8 bg-[#DDF0FF]">
              <h2 className="text-center text-primary font-bold">
                Welcome back!
              </h2>
              <p className="w-full text-center text-neutral-600 md:font-normal">
                Fill in your credentials
              </p>
            </div>
            <div className="mt-4">
              <p className="mb-3">Email</p>
              <Input
                placeholder="Email or Username"
                type="text"
                isDirty={errors.username && touched.username ? true : false}
                fieldProps={getFieldProps("username")}
                error={errors.username}
              />
            </div>
            <div className="mt-4">
              <p className="mb-3">Password</p>
              <div className="relative">
                <Input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  isDirty={errors.password && touched.password ? true : false}
                  fieldProps={getFieldProps("password")}
                  error={errors.password}
                />{" "}
                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </div>
              </div>
            </div>
            <div className="text-end cursor-pointer text-primary font-medium mt-3 capitalize">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>
            <div className="flex justify-center">
              <button
                onClick={onSubmit}
                className="text-center px-4 py-1 text-white capitalize mt-3 bg-primary md:rounded-2xl"
              >
                {loading ? "Logging in ..." : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
