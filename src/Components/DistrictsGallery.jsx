import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// Import all local images
import chennaiImg from "../assets/images/Chennai.jpg";
import mahabalipuramImg from "../assets/images/Mahabalipuram.jpg";
import kanchipuramImg from "../assets/images/Kanchipuram.jpg";
import velloreImg from "../assets/images/Vellore.jpg";
import thanjavurImg from "../assets/images/Thanjavur.jpg";
import maduraiImg from "../assets/images/Madurai.jpg";
import rameswaramImg from "../assets/images/Rameswaram.jpg";
import kanyakumariImg from "../assets/images/kanyakumari.jpg";
import ootyImg from "../assets/images/Ooty.jpg";
import kodaikanalImg from "../assets/images/Kodaikanal.jpg";
import trichyImg from "../assets/images/Trichy.jpg";
import coimbatoreImg from "../assets/images/Coimbatore.jpg";
import yercaudImg from "../assets/images/Yercaud.jpg";
import chidambaramImg from "../assets/images/Chidambaram.jpg";
import courtallamImg from "../assets/images/Courtallam.jpg";

const districts = [
    {
        name: "Chennai",
        image: chennaiImg,
        tagline: "Gateway to South India"
    },
    {
        name: "Mahabalipuram",
        image: mahabalipuramImg,
        tagline: "Ancient Shore Temple"
    },
    {
        name: "Kanchipuram",
        image: kanchipuramImg,
        tagline: "City of Thousand Temples"
    },
    {
        name: "Vellore",
        image: velloreImg,
        tagline: "Fort City of Tamil Nadu"
    },
    {
        name: "Thanjavur",
        image: thanjavurImg,
        tagline: "Rice Bowl of Tamil Nadu"
    },
    {
        name: "Madurai",
        image: maduraiImg,
        tagline: "Athens of the East"
    },
    {
        name: "Rameswaram",
        image: rameswaramImg,
        tagline: "Island of the Rama Temple"
    },
    {
        name: "Kanyakumari",
        image: kanyakumariImg,
        tagline: "Land's End of India"
    },
    {
        name: "Ooty",
        image: ootyImg,
        tagline: "Queen of Hill Stations"
    },
    {
        name: "Kodaikanal",
        image: kodaikanalImg,
        tagline: "Princess of Hill Stations"
    },
    {
        name: "Trichy",
        image: trichyImg,
        tagline: "Rock Fort City"
    },
    {
        name: "Coimbatore",
        image: coimbatoreImg,
        tagline: "Manchester of South India"
    },
    {
        name: "Yercaud",
        image: yercaudImg,
        tagline: "Jewel of the South"
    },
    {
        name: "Chidambaram",
        image: chidambaramImg,
        tagline: "City of Cosmic Dance"
    },
    {
        name: "Courtallam",
        image: courtallamImg,
        tagline: "Spa of South India"
    }
];

function DistrictsGallery() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7e095] to-[#eda923]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#2B2F3A] mb-3">
                        Discover Tamil Nadu
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Explore the cultural and natural wonders of our beautiful districts
                    </p>

                    <div className="relative max-w-md mx-auto mt-6">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search districts..."
                            className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {districts.map((district) => (
                        <div
                            key={district.name}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={district.image}
                                    alt={`${district.name} district`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                                <div className="flex items-center mb-1">
                                    <FaMapMarkerAlt className="text-yellow-300 mr-2" />
                                    <h3 className="text-white font-bold text-lg">{district.name}</h3>
                                </div>
                                <p className="text-yellow-100 text-sm">{district.tagline}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-[#2B2F3A] hover:bg-[#1a1c23] text-white px-8 py-3 rounded-full font-medium transition-colors">
                        View All Destinations
                    </button>
                </div>
            </div>
        </section>
    );
}

export default DistrictsGallery;