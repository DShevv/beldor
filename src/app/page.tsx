import Hero from "@/blocks/Hero/Hero";
import CatalogBlock from "@/blocks/CatalogBlock/CatalogBlock";
import AboutCompanyBlock from "@/blocks/AboutCompanyBlock/AboutCompanyBlock";
import AdvantagesBlock from "@/blocks/AdvantagesBlock/AdvantagesBlock";
import NewsSlider from "@/blocks/NewsSlider/NewsSlider";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <div className="wrapper">
        <CatalogBlock />
        <AboutCompanyBlock />
        <AdvantagesBlock />
        <NewsSlider />
      </div>
    </main>
  );
};

export default MainPage;
