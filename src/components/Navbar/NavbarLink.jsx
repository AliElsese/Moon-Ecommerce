import { Link } from "react-router-dom";

export default function NavbarLink({ children }) {
    return (
        <>
            <Link to={`/${children === 'home' ? '' : children}`}
                className="capitalize text-[14px] text-WarmBlack font-Inter font-normal leading-5.5 hover:text-DarkBrown cursor-pointer"
            >
                {children}
            </Link>
        </>
    )
}
