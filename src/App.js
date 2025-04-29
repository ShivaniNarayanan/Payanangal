import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TempleCarousel from "./Components/TempleCarousel";
import DistrictsGallery from "./Components/DistrictsGallery";
import CategorySection from "./Components/CategorySection";


// Import all images
import ootyMountain from "./assets/images/Ooty.jpg";
import kodaikanalMountain from "./assets/images/Kodaikanal.jpg";
import yercaudMountain from "./assets/images/Yercaud.jpg";
import coonoorMountain from "./assets/images/coonoor.jpg";

import marinaBeach from "./assets/images/Marina.jpg";
import kanyakumariBeach from "./assets/images/kanyakumari.jpg";
import rameswaramBeach from "./assets/images/Rameswaram.jpg";
import mahabalipuramBeach from "./assets/images/Mahabalipuram.jpg";

import courtallamWaterfall from "./assets/images/Courtallam.jpg";
import hogenakkalWaterfall from "./assets/images/Hogenakkal.jpg";
import silverCascade from "./assets/images/Silver-cascade.jpeg";
import thalaiyarFalls from "./assets/images/Thalaiyar.jpg";

function App() {
  const categories = [
    {
      title: "Majestic Mountains",
      description: "Explore Tamil Nadu's breathtaking hill stations",
      type: "mountains",
      items: [
        { name: "Ooty", image: ootyMountain },
        { name: "Kodaikanal", image: kodaikanalMountain },
        { name: "Yercaud", image: yercaudMountain },
        { name: "Coonoor", image: coonoorMountain }
      ]
    },
    {
      title: "Pristine Beaches",
      description: "Discover stunning coastal landscapes",
      type: "beaches",
      items: [
        { name: "Marina Beach", image: marinaBeach },
        { name: "Kanyakumari", image: kanyakumariBeach },
        { name: "Rameswaram", image: rameswaramBeach },
        { name: "Mahabalipuram", image: mahabalipuramBeach }
      ]
    },
    {
      title: "Enchanting Waterfalls",
      description: "Witness nature's magnificent cascades",
      type: "waterfalls",
      items: [
        { name: "Courtallam", image: courtallamWaterfall },
        { name: "Hogenakkal", image: hogenakkalWaterfall },
        { name: "Silver Cascade", image: silverCascade },
        { name: "Thalaiyar Falls", image: thalaiyarFalls }
      ]
    }
    // Add more categories as needed
  ];

  return (
    <div className="bg-[#fdf3d5]">
      <Header />

      <main className="pt-[80px] pb-12">
        <TempleCarousel />
        <DistrictsGallery />

        {/* Categories Sections */}
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            description={category.description}
            items={category.items}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;