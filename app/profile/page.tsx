import TempPics from "@/public/images/tempPic.jpg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

export default function Profile() {
  return (
    <>
      <div className="max-w-2xl mx-auto justify-center px-3 gap-3 items-start sm:flex h-screen pt-10">
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 bg-white sm:w-full sm:max-w-xs sm:p-1 mb-4">
          <div className="m-5">
            <div>
                <h1 className="text-center font-bold text-3xl mb-10">Profile</h1>
                <Image src={TempPics} alt="Profile" className="rounded-full mb-5"/>
            </div>
            <div className="text-center sm:text-2xl ">
                <h1>Michael lekson</h1>
            </div>
            <div className="my-10">
                <div className="my-5">
                    <h1 className="font-bold">Email</h1>
                    <input type="text" placeholder="michaellekson@gmail.com" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">Mobile phone</h1>
                    <input type="text" placeholder="+62 819 7621 8901" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">Password</h1>
                    <input type="text" placeholder="*******" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
            </div>
          </div>
        </div>


        
        <div className="shadow-md border border-gray-200 rounded-lg max-w-sm p-4 bg-white sm:w-full sm:max-w-xs sm:p-1 mb-4">
          <div className="m-5">
            <h1 className="text-center font-bold text-3xl mb-10">Detail</h1>
            <div className="my-10">
                <div className="my-5">
                    <h1 className="font-bold">Country</h1>
                    <input type="text" placeholder="Indonesia" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">Province</h1>
                    <input type="text" placeholder="Jawa Barat" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">City</h1>
                    <input type="text" placeholder="Bogor" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">Address 1</h1>
                    <input type="text" placeholder="Perumahan citra indah" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
                <div className="my-5">
                    <h1 className="font-bold">Address 2</h1>
                    <input type="text" placeholder="Bukit Lavender AC 01 no 6" disabled className="border pl-5 w-full rounded-lg"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
