// components/TempleCarousel.jsx
import Slider from "react-slick";
import sunTemple from "../assets/images/sun temple.jpg";
import tamilnaduTemple from "../assets/images/Tamilnadu pic.jpg";

const slides = [
    {
        img: sunTemple,
        text: "Journey Beyond Boundaries on Payanangal",
    },
    {
        img: tamilnaduTemple,
        text: "Explore Culture, Heritage & Timeless Temples",
    },
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
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <div className="w-full h-[90vh] relative z-0 overflow-hidden">

            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div key={i} className="relative w-full h-[90vh]">
                        <img
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center animate-fade-in-up drop-shadow-lg px-4">
                                {slide.text}
                            </h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TempleCarousel;
