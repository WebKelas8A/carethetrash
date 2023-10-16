"use client";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUser, BiSolidLock } from "react-icons/bi";
import GoogleIcon from "@/public/google.svg"

export default function Home() {

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto justify-center items-center flex h-screen">
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 bg-white w-full">
          <form className="space-y-6" action="#">
            <h3 className="text-xl font-medium">Login</h3>
            <div>
              <label className="text-sm font-medium block mb-2">
                Your email
              </label>
              <BiSolidUser className="absolute m-3 opacity-50 mt-4" />
              <input
                type="email"
                name="email"
                id="email"
                className=" pl-[2rem] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none focus:border-green-600"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">
                Your password
              </label>
              <BiSolidLock className="absolute m-3 opacity-50 mt-3" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="pl-[2rem] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none focus:border-green-600"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                {/* <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="text-sm ml-3">
                    <label className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div> */}
                <div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Reset Password
                  </a>
                </div>
              </div>
            </div>
            <Link href="/menu/">
              <button
                type="submit"
                className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
            <div className="text-sm font-medium">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
