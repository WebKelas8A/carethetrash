import Image from "next/image";
import Link from "next/link";


function NavLink({ to, children }: any) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}


export default function NavLinkPage() {
  return (
    <>
      <div className="hidden md:flex">
        <NavLink to="/organic">Organic</NavLink>
        <NavLink to="/inorganic">Onorganic</NavLink>
        <NavLink to="/plantwaste">Plant waste</NavLink>
        <NavLink to="/menu">Waste bank map</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      {/* <div>
        <Image
          src={ProfilePics}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p>Michael Lekson</p>
      </div> */}
    </>
  );
}
