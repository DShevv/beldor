import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import newsBg from "@/assets/images/news.jpg";
import NewsBlock from "@/blocks/NewsBlock/NewsBlock";

const NewsPage = () => {
  return (
    <main>
      <FirstBlock
        image={newsBg}
        title="Новости"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Новости", href: "/news" },
        ]}
      />
      <div className="wrapper">
        <NewsBlock />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default NewsPage;
