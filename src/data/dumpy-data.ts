import searchImage1 from "@/assets/images/search.png";



export const navigation = [
  {
    id: 1,
    title: "Главная",
    href: "/",
  },
  {
    id: 2,
    title: "Продукция",
    href: "/catalog",
    children: [
      {
        id: 11,
        title: "Оборудование для обслуживания дорог",
        href: "/catalog/road-maintenance-equipment",
      },
      {
        id: 12,
        title: "Оборудование для обслуживания самолётов",
        href: "/catalog/plane-maintenance-equipment",
      },

    ],
  },
  {
    id: 3,
    title: "Услуги",
    href: "/services",
    children: [
      {
        id: 21,
        title: "Пункт приёма ЯР-4М, утративших потребительские свойства",
        href: "/services/services",
      },
      {
        id: 22,
        title: "Металлообработка",
        href: "/services/services",
      },
      {
        id: 23,
        title: "Плазменная резка",
        href: "/services/services",
      },


    ],
  },
  {
    id: 4,
    title: "О КОМПАНИИ",
    href: "/about",
    children: [
      {
        id: 31,
        title: "О нас",
        href: "/about",
      },
      {
        id: 32,
        title: "Качество продукции",
        href: "/quality",
      },
      {
        id: 33,
        title: "Административные процедуры",
        href: "/certificates",
      },
    ],

  },
  {
    id: 5,
    title: "Новости",
    href: "/news",

  },
  {
    id: 6,
    title: "Контакты",
    href: "/contacts",
  },
];

export const searchData = [
  {
    id: 1,
    title: "Оборудование для обслуживания дорог",
    description: "Профессиональное оборудование для ремонта и обслуживания дорожного покрытия. Высокое качество и надежность.",
    image: searchImage1,
    href: "/catalog/road-maintenance-equipment",
  },
  {
    id: 2,
    title: "Оборудование для обслуживания самолётов",
    description: "Специализированное оборудование для технического обслуживания авиационной техники. Соответствует всем стандартам безопасности.",
    image: searchImage1,
    href: "/catalog/plane-maintenance-equipment",
  },
  {
    id: 3,
    title: "Пункт приёма ЯР-4М",
    description: "Профессиональный пункт приёма ЯР-4М, утративших потребительские свойства. Экологически безопасная утилизация.",
    image: searchImage1,
    href: "/services/services",
  },
  {
    id: 4,
    title: "Металлообработка",
    description: "Высокоточная металлообработка с использованием современного оборудования. Изготовление деталей любой сложности.",
    image: searchImage1,
    href: "/services/services",
  },
  {
    id: 5,
    title: "Плазменная резка",
    description: "Услуги плазменной резки металла любой толщины. Высокая точность и скорость обработки.",
    image: searchImage1,
    href: "/services/services",
  },
  {
    id: 6,
    title: "О компании Белдор",
    description: "Ведущая компания в области производства и обслуживания специализированного оборудования. Более 20 лет на рынке.",
    image: searchImage1,
    href: "/about",
  },
  {
    id: 7,
    title: "Качество продукции",
    description: "Система контроля качества соответствует международным стандартам. Все продукты проходят строгую сертификацию.",
    image: searchImage1,
    href: "/quality",
  },
  {
    id: 8,
    title: "Административные процедуры",
    description: "Полный пакет документов и сертификатов. Прозрачность всех административных процедур.",
    image: searchImage1,
    href: "/certificates",
  },
  {
    id: 9,
    title: "Новости компании",
    description: "Актуальные новости, обновления продуктов и корпоративные события. Следите за нашими достижениями.",
    image: searchImage1,
    href: "/news",
  },
  {
    id: 10,
    title: "Контакты и офисы",
    description: "Наши офисы и представительства. Контактная информация для связи с нашими специалистами.",
    image: searchImage1,
    href: "/contacts",
  }
];