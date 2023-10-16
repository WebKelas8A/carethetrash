"use client";
import Link from "next/link";

export default function Plant() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-2xl mx-auto justify-center items-center flex h-screen">
          <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 bg-white w-full">
            <form className="space-y-6" action="#">
              <h3 className="text-xl text-center font-medium">Plant Waste</h3>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none focus:border-orange-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Location 1
                </label>
                <input
                  type="location"
                  name="location"
                  id="location"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none focus:border-orange-600"
                  placeholder="Road name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Location 2
                </label>
                <input
                  type="location"
                  name="location"
                  id="name"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none focus:border-orange-600"
                  placeholder="Home address"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Weight</label>
                <input
                  type="range"
                  name="location"
                  min={0}
                  max={10}
                  //   onInput={output}
                  id="Weight"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 outline-none "
                  placeholder="Home address"
                  required
                />
                <p id="outputWeight"></p>
              </div>
              <Link href="/menu/">
                <button
                  type="submit"
                  className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Continue order
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
