'use client'

import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar"

export default function main(){
    return(
        <div className="h-screen">
            <Navbar/>
            <div className="">
                <TopBar balance={"2.000.000"} completed={20}/>
            </div>
        </div>
    )
}