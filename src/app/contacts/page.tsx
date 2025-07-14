import FirstBlock from "@/blocks/FirstBlock/FirstBlock";

import ContactsBlock from "@/blocks/ContactsBlock/ContactsBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import contactsBg from "@/assets/images/contacts.jpg";
import ContactsDepartments from "@/blocks/ContactsDepartments/ContactsDepartments";

const ContactsPage = () => {
  return (
    <main>
      <FirstBlock
        image={contactsBg}
        title="Контакты"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Контакты", href: "/contacts" },
        ]}
      />
      <div className="wrapper">
        <ContactsBlock isTitle={false} />
        <ContactsDepartments />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default ContactsPage;
