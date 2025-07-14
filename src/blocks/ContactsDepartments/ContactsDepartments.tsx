import clsx from "clsx";
import styles from "./ContactsDepartments.module.scss";
import Link from "next/link";
import { SvgMail, SvgPhone } from "@/assets/icons/svgs";

const ContactsDepartments = () => {
  return (
    <section className={styles.container}>
      <h2 className={clsx(styles.title, "h2")}>Контакты отделов компании</h2>

      <div className={styles.list}>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>Директор</h3>
            <p className={clsx(styles.text, "body-3")}>
              Кепель Сергей Петрович
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <Link
              href={"tel:+375177636453"}
              className={clsx(styles.contactInfo, "body-4")}
            >
              +375 (17) 763–64–53
            </Link>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <Link
              href={"mailto:bdt24@yandex.by"}
              className={clsx(styles.contactInfo, "body-4")}
            >
              bdt24@yandex.by
            </Link>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Главный инженер
            </h3>
            <p className={clsx(styles.text, "body-3")}>
              Мехович Юрий Геннадьевич (вопросы по конструкции выпускаемой
              техники, производственные вопросы)
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375296372269"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (29) 637–22–69
              </Link>
              <Link
                href={"tel:+375177636450"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–64–50
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <Link
              href={"mailto:bdt4@tut.by"}
              className={clsx(styles.contactInfo, "body-4")}
            >
              bdt4@tut.by
            </Link>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>Приёмная</h3>
            <p className={clsx(styles.text, "body-3")}>
              Авдеева Екатерина Владимировна
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636453"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–64–53
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt4@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                dortehnika@tut.by
              </Link>

              <Link
                href={"mailto:beldortehnikafilial@yandex.ru"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                beldortehnikafilial@yandex.ru
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Начальник отдела снабжения и маркетинга
            </h3>
            <p className={clsx(styles.text, "body-3")}>
              Лысенко Наталья Георгиевна (управление сбытом продукции, вопросы
              снабжения и сервисного обслуживания)
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Маркетинг (приём заказов, заключение договоров)
            </h3>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Специалист по продаже
            </h3>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>Снабжение</h3>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Начальник конструкторско-технологического отдела
            </h3>
            <p className={clsx(styles.text, "body-3")}>
              Богдан Виктор Валерьевич
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Ведущий специалист по кадрам
            </h3>
            <p className={clsx(styles.text, "body-3")}>
              Менжакина Галина Георгиевна
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgMail />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"mailto:bdt9@tut.by"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                bdt9@tut.by
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Инженер по техническому контролю
            </h3>
            <p className={clsx(styles.text, "body-3")}>
              Меркулов Борис Ананьевич (вопросы гарантийного обслуживания
              и качества выпускаемой техники)
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.department}>
          <div className={styles.name}>
            <h3 className={clsx(styles.departmentTitle, "h3")}>
              Отдел бухгалтерского учёта
            </h3>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <SvgPhone />
            </div>
            <div className={styles.contactInfo}>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
              <Link
                href={"tel:+375177636931"}
                className={clsx(styles.contactInfo, "body-4")}
              >
                +375 (17) 763–69–31
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsDepartments;
