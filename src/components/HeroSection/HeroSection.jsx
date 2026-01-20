import HeroImg from "../../assets/images/hero.svg";
import LogoIcon from "../../assets/images/Icon.svg";

export default function HeroSection() {
    return (
        <>
            <div className="w-full lg:relative">
                <img src={HeroImg} alt="hero-img" className="w-full" />
                <div className="banner py-11.75 flex flex-col justify-center items-center gap-10.5 bg-DarkBrown px-[73.5px] lg:absolute lg:top-0 lg:bottom-0 lg:left-41.25">
                    <img src={LogoIcon} alt="logo-icon" />
                    <div className="text-center">
                        <p className="mb-5 text-[16px] text-[#FFFDFB] leading-6 font-Inter font-medium">Handcrafted in Viet Nam since 1650</p>
                        <h2 className="text-[36px] text-[#FFFDFB] leading-10 font-Inter font-bold">BAT TRANG <br /> DINNER SET</h2>
                    </div>
                    <button className="uppercase text-[14px] text-DarkBrown leading-5 font-Inter font-semibold bg-white px-4.5 py-3.75 w-full hover:bg-transparent hover:text-white hover:ring hover:ring-BeigePeach">shop now</button>
                </div>
            </div>
        </>
    )
}