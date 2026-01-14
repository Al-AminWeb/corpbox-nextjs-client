import Logo from "../../helper/Logo";
import Link from "next/link";
import {NAVLINKS} from "../../../constant/constant";
import {HiBars3BottomRight} from "react-icons/hi2";


export default function Navbar() {
    return (
        <div className="h-[12vh] relative z-10 lg:mt-8">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <Logo/>
                {/* Nav Links for large screen */}
                <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10">
                    {NAVLINKS.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className="text-black font-medium hover:text-[#b69974]"
                        >
                            <p>{link.title}</p>
                        </Link>
                    ))}
                    {/*btn*/}
                    <button className="h-full p-3 bg-[#b69974] text-white font-bold">
                        Create Account
                    </button>
                    <div className='lg:hidden'>
                        <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f] cursor-pointer"/>
                    </div>

                </div>


            </div>
        </div>
    );
}