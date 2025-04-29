import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function MobileMenu() {
    const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

    return (
        <li className="list-none w-full px-4 pt-4 hover:bg-[#B3532D] hover:text-white cursor-pointer">
            <div
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                className="flex items-center justify-between text-lg font-semibold cursor-pointer"
            >
                <span className="w-full text-center">Destinations</span>
                <FaChevronDown
                    className={`ml-2 transition-transform duration-300 ${isDestinationsOpen ? "rotate-180" : ""}`}
                />
            </div>

            {isDestinationsOpen && (
                <ul className="bg-white text-black mt-2 text-base rounded-md overflow-y-auto max-h-60 border-t border-yellow-300">
                    <li className="py-2 px-4 hover:bg-yellow-100">Chennai</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Mahabalipuram</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Kanchipuram</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Vellore</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Thanjavur</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Madurai</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Rameswaram</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Kanyakumari</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Ooty</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Kodaikanal</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Trichy</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Coimbatore</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Yercaud</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Chidambaram</li>
                    <li className="py-2 px-4 hover:bg-yellow-100">Courtallam</li>
                </ul>
            )}
        </li>
    );
}

export default MobileMenu