import Slider from "react-slick";
import sunTemple from "../assets/images/sun temple.jpg";
import tamilnaduTemple from "../assets/images/Tamilnadu pic.jpg";
import Chennai from "../assets/images/Marina.jpg";
import rameswaramImg from "../assets/images/Rameswaram.jpg";
import yercaudImg from "../assets/images/Yercaud.jpg";

const slides = [
    {
        img: tamilnaduTemple,
        text: "Explore Culture, Heritage & Timeless Temples",
    },
    {
        img: Chennai,
        text: "Chennai, where the rhythm of life is set by the waves.",
    },
    {
        img: rameswaramImg,
        text: "Let the divine essence of Rameshwaram inspire your journey",
    },
    {
        img: yercaudImg,
        text: "Yercaud is not just a hill station, it's an emotional experience",
    }
];

const TempleCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="w-full h-[90vh] relative z-0 overflow-hidden">
            {/* Appointment Form - Desktop (Right Side) */}
            <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 z-10 w-80 bg-white bg-opacity-90 p-12 mr-40 my-10 rounded-lg shadow-xl">
                <BookingForm />
            </div>

            {/* Appointment Form - Mobile (Bottom) */}
            <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 w-11/12 max-w-md bg-white bg-opacity-90 p-4 rounded-lg shadow-xl">
                <BookingForm mobile />
            </div>

            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div key={i} className="relative w-full h-[90vh]">
                        <img
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex items-center text-justify justify-left pl-4 lg:pl-24 pr-0 lg:pr-60">
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-right animate-fade-in-up drop-shadow-lg max-w-xs sm:max-w-sm md:max-w-xl">
                                {slide.text}
                            </h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Extracted Booking Form Component
const BookingForm = ({ mobile = false }) => (
    <>
        <h3 className={`${mobile ? 'text-lg' : 'text-xl'} font-bold mb-3 ${mobile ? 'text-center' : ''} text-[#d4a76a]`}>
            Book Your Tour
        </h3>
        <form className="space-y-3">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:ring-2 focus:ring-[#d4a76a]"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded focus:ring-2 focus:ring-[#d4a76a]"
            />
            <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#d4a76a] text-gray-400 [color-scheme:light]"
            />
            <button
                type="submit"
                className="w-full bg-[#d4a76a] text-white py-2 text-sm sm:text-base rounded hover:bg-[#c18d4a] transition"
            >
                Confirm Booking
            </button>
        </form>
    </>
);

export default TempleCarousel;