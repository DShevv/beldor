import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import roadMaintenanceBg from "@/assets/images/catalog.jpg";
import CategoriesBlock from "@/blocks/CategoriesBlock/CategoriesBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";

const ContactsPage = () => {
  return (
    <main>
      <FirstBlock
        image={roadMaintenanceBg}
        title="Оборудование для обслуживания дорог"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Каталог", href: "/catalog" },
          {
            title: "Оборудование для обслуживания дорог",
            href: "/catalog/road-maintenance-equipment",
          },
        ]}
      />
      <div className="wrapper">
        <CategoriesBlock isTitle={false} />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default ContactsPage;
