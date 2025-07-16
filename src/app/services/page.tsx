import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import servicesBg from "@/assets/images/services.jpg";
import ServicesBlock from "@/blocks/ServicesBlock/ServicesBlock";

const NewsPage = () => {
  return (
    <main>
      <FirstBlock
        image={servicesBg}
        title="Услуги"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Услуги", href: "/services" },
        ]}
      />
      <div className="wrapper">
        <ServicesBlock />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default NewsPage;
