import { CgProfile } from "react-icons/cg";
import { HiBars3 } from "react-icons/hi2";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


export default function NavbarIcon({ children }) {
    return (
        <>
            {children === "bars" ? <span className="lg:hidden hover:text-DarkBrown cursor-pointer"><HiBars3 size={20} /></span> : null}
            {children === "search" ? <span className="hidden lg:block hover:text-DarkBrown cursor-pointer"><IoIosSearch size={20} /></span> : null}
            {children === "profile" ? <span className="hidden lg:block hover:text-DarkBrown cursor-pointer"><CgProfile size={20} /></span> : null}
            {children === "heart" ? <span className="hidden lg:block hover:text-DarkBrown cursor-pointer"><IoIosHeartEmpty size={20} /></span> : null}
            {children === "cart" ? <span className="hover:text-DarkBrown cursor-pointer"><IoCartOutline size={20} /></span> : null}
        </>
    )
}
