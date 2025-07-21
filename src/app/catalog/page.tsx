import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import catalogBg from "@/assets/images/catalog.jpg";
import CatalogBlock from "@/blocks/CatalogBlock/CatalogBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";

const ContactsPage = () => {
  return (
    <main>
      <FirstBlock
        image={catalogBg}
        title="Каталог"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
        ]}
      />
      <div className="wrapper">
        <CatalogBlock isTitle={false} />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default ContactsPage;
