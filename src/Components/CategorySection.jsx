import { FaArrowRight } from "react-icons/fa";

export default function CategorySection({ title, description, items }) {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#2B2F3A]">{title}</h2>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                                    Explore <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center justify-center mx-auto gap-2">
                        View all {title.toLowerCase()}
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
