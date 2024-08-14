import { getMenu } from "@/app/api/menu";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from 'classnames'
import styles from './Menu.module.css'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export async function Menu() {
  const menu = await getMenu(0);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route}>
            <a href={`/${menuItem.route}`}>
              <div className={cn(styles.firstLevel,
                {[styles.firstLevelActive]: menuItem.id===TopLevelCategory.Books})}>
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
           
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = () => {};
  const buildThirdLevel = () => {};
  return <div className="styles.menu">{buildFirstLevel()}</div>;
}
