import { BiWallet, BiPlusCircle } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

export default function TopBar({ balance }: any) {
  return (
    <>
      <div className="max-w-2xl mx-auto justify-center px-3 gap-3 items-start sm:flex h-screen pt-10">
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 bg-white w-full sm:max-w-xs sm:p-1 mb-4">
          <div className="m-2">
            <BiWallet className="absoulute text-2xl" />
            <div className="font-bold text-3xl">
              <h1>Balance</h1>
            </div>
            <div className="sm:text-2xl">
              <p>Rp. {balance}</p>
            </div>
            <div className="shadow-md border border-gray-200 rounded-lg p-4 bg-white my-8 cursor-pointer sm:hidden flex">
              <div className="flex justify-center items-center mx-auto">
                <Link href="/topup" className="flex justify-center items-center mx-auto">
                    <h1 className="mx-2">Top up</h1>
                    <BiPlusCircle className="text-2xl"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-200 rounded-lg p-4 bg-white my-8 cursor-pointer sm:flex hidden">
          <div>
            <BiPlusCircle className="text-2xl" />
          </div>
        </div>
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 bg-white w-full sm:max-w-xs sm:p-1">
          <div className="m-4">
            <div className="font-bold text-3xl">
              <h1>Level 4</h1>
            </div>
            <div>
              <ProgressBar completed={50} bgColor="#5dbb63" />
            </div>
            <div className="">
              <Link
                href="/help"
                className="hover:underline hover:text-blue-600"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
