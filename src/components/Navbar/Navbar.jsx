import NavbarIcon from "./NavbarIcon";
import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-5 lg:px-41.25 py-5.5">
                <NavbarIcon>bars</NavbarIcon>
                <NavbarLogo />
                <div className="hidden lg:flex items-center gap-15">
                    <NavbarLink>home</NavbarLink>
                    <NavbarLink>shop</NavbarLink>
                    <NavbarLink>about</NavbarLink>
                    <NavbarLink>contact</NavbarLink>
                    <NavbarLink>login</NavbarLink>
                </div>
                <div className="flex items-center gap-6">
                    <NavbarIcon>search</NavbarIcon>
                    <NavbarIcon>profile</NavbarIcon>
                    <NavbarIcon>heart</NavbarIcon>
                    <NavbarIcon>cart</NavbarIcon>
                </div>
            </div>
        </>
    )
}
