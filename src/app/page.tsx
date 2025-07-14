import Hero from "@/blocks/Hero/Hero";
import CatalogBlock from "@/blocks/CatalogBlock/CatalogBlock";
import AboutCompanyBlock from "@/blocks/AboutCompanyBlock/AboutCompanyBlock";
import AdvantagesBlock from "@/blocks/AdvantagesBlock/AdvantagesBlock";
import NewsSlider from "@/blocks/NewsSlider/NewsSlider";
import ContactsBlock from "@/blocks/ContactsBlock/ContactsBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <div className="wrapper">
        <CatalogBlock />
        <AboutCompanyBlock />
        <AdvantagesBlock />
        <NewsSlider />
        <ContactsBlock />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default MainPage;
