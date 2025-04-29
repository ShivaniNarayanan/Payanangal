import logo from "../assets/images/logo.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full h-full absolute bg-gradient-to-r from-[#eda923] to-[#f7e095]">
            <header className="z-50 fixed w-full top-0 flex justify-between items-center py-5 px-6 md:px-10 bg-[#fff4dc] shadow-md">

                <a href="#">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-16 h-16 border rounded-3xl border-yellow-100 hover:scale-105 transition-all"
                    />
                </a>
                <ul className="hidden xl:flex items-center gap-8 font-serif text-base">
                    {["Home", "Gallery", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="p-3 hover:bg-[#B3532D] hover:text-white rounded-3xl transition-all cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                    {/* Destinations with dropdown */}
                    <li className="relative group">
                        <span className="p-3 hover:bg-[#B3532D] hover:text-white rounded-3xl transition-all cursor-pointer">Destinations</span>
                        <ul className="absolute top-12 left-0 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 w-60 max-h-64 overflow-y-auto text-gray-800 font-normal">
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Chennai</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Mahabalipuram</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Kanchipuram</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Vellore</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Thanjavur</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Madurai</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Rameswaram</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Kanyakumari</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Ooty</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Kodaikanal</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Trichy</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Coimbatore</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Yercaud</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Chidambaram</li>
                            <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">Courtallam</li>
                        </ul>
                    </li>
                    <button className="p-3 bg-[#F1B861] hover:bg-[#B3532D] hover:text-white rounded-3xl transition-all cursor-pointer text-[#2B2F3A]">
                        Sign Up
                    </button>
                </ul>

                <div className="relative hidden md:flex items-center justify-center gap-4">
                    <i className="bx bx-search absolute left-3 text-2xl text-[#3D5A60]"></i>
                    <input
                        type="text"
                        placeholder="Search...."
                        className="py-2 pl-10 rounded-xl border-2 border-[#F1B861] focus:bg-[#FFF4DC] focus:outline-[#B3532D]"
                    />
                </div>

                <i
                    className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-[#2B2F3A]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>

                {/* Mobile Menu */}
                <div
                    className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ transition: "transform 0.3s, opacity 0.3s ease" }}
                >
                    <li className="list-none w-full text-center p-4 hover:bg-[#B3532D] hover:text-white transition-all cursor-pointer">
                        Home
                    </li>
                    <MobileMenu />
                    <li className="list-none w-full text-center p-4 hover:bg-[#B3532D] hover:text-white transition-all cursor-pointer">
                        Gallery
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-[#B3532D] hover:text-white transition-all cursor-pointer">
                        Contact
                    </li>

                </div>

            </header>
        </div>)
}
export default Header;