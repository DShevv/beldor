import FirstBlock from "@/blocks/FirstBlock/FirstBlock";
import SeoBlock from "@/blocks/SeoBlock/SeoBlock";
import Feedback from "@/blocks/Feedback/Feedback";
import newsBg from "@/assets/images/news.png";
import styles from "./page.module.scss";
import clsx from "clsx";
import { SvgTime } from "@/assets/icons/svgs";
import NewsSlider from "@/blocks/NewsSlider/NewsSlider";
import GalleryBlock from "@/blocks/GalleryBlock/GalleryBlock";
import VideoBlock from "@/blocks/VideoBlock/VideoBlock";
import InlineButton from "@/components/Buttons/InlineButton/InlineButton";

const NewsPage = () => {
  return (
    <main className={styles.main}>
      <FirstBlock
        image={newsBg}
        title="Машина для ямочного ремонта ЯР-4М"
        breadcrumbsItems={[
          { title: "Главная", href: "/" },
          { title: "Новости", href: "/news" },
          { title: "Машина для ямочного ремонта ЯР-4М", href: "/news/1" },
        ]}
      >
        <div className={styles.info}>
          <div className={clsx(styles.date, "body-4")}>15.07.2025</div>{" "}
          <div className={clsx(styles.tag, "body-4")}>
            <SvgTime /> 10 минут на чтение
          </div>
        </div>
      </FirstBlock>
      <div className="wrapper">
        <section className={styles.content}>
          <p>
            Дорожная машина ЯР-4М предназначена для выполнения полного комплекса
            ямочного ремонта при содержании автомобильных дорог.
          </p>
          <p>
            Машина состоит из оборудования для ямочного ремонта ЯР-4,
            установленного на шасси автомобильное МАЗ-6303А5 (двигатель Евро-3),
            МАЗ-6312В3 (двигатель Евро-4) или МАЗ-6312С3 (двигатель Евро-5).
            Привод рабочих органов оборудования осуществляется
            от гидравлического насоса НШ-32, установленного на КОМ коробки
            передач базового шасси с управлением из кабины.
          </p>
          <p>
            Основу оборудования составляет бункер для горячего асфальтобетона.
            Бункер имеет масляную рубашку, в которой находится термомасло,
            разогреваемое дизельной горелкой. Бункер вместе с масляной рубашкой
            утеплён термоизоляционным материалом. Верхняя часть бункера закрыта
            складной термоизоляционной крышей, открывание и закрывание которой
            осуществляется гидроцилиндрами. Выгрузка асфальтобетона из бункера
            производится шнеком. Для предотвращения слеживаемости асфальтобетона
            в бункере над шнеком установлен рыхлитель.
          </p>
          <h2>Последовательность основных операций:</h2>
          <ul>
            <li>
              разогрев термомасла до рабочей температуры топливной горелкой;
            </li>
            <li>
              загрузка бункера горячим асфальтобетоном; обработка краёв ямки
              отбойным молотком;
            </li>
            <li>сушка ямки переносной горелкой (при необходимости);</li>
            <li>продувка ямки сжатым воздухом;</li>
            <li>нанесение (распыление) битумной эмульсии;</li>
            <li>заполнение ямки горячим асфальтобетоном;</li>
            <li>разравнивание асфальтобетона в ямке;</li>
            <li>уплотнение асфальтобетона виброплощадкой.</li>
          </ul>
        </section>

        <GalleryBlock />
        <VideoBlock />
        <InlineButton backIcon className={styles.back} type="link" href="/news">
          Назад к новостям
        </InlineButton>

        <NewsSlider title="Другие новости" />
        <SeoBlock />
        <Feedback />
      </div>
    </main>
  );
};

export default NewsPage;
