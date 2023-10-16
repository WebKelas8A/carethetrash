import {useState} from 'react'
import NavLinkPage from './NavLink'

function MobileNav({open, setOpen}: any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full z-20"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-[#5dbb63] h-20"> {/*logo container*/}
                <a className="text-xl font-bold" href="/">Care The Trash</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/organic/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Organic
                </a>
                <a className="text-xl font-normal my-4" href="/inorganic/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Inorganic
                </a> 
                <a className="text-xl font-medium my-4" href="/plantwaste/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Plant waste
                </a>
                <a className="text-xl font-normal my-4" href="/menu/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Waste bank map
                </a> 
                <a className="text-xl font-normal my-4" href="/profile/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Profile
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-[#5dbb63] px-4 py-4 h-20 items-center z-20">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/62 flex items-center">
                <a className="text-1xl font-bold" href="/">Care The Trash</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-4 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLinkPage/>
                </div>
            </div>
        </nav>
    )
}