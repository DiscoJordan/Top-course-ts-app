
// import styles from "./page.module.css";
import Htag from "./Components/Htag/Htag";
import Button from "./Components/Button/Button";
import P from "./Components/P/P";
export default function Home(): JSX.Element {

  return (
    <>
    <Htag tag='h1'>Текст</Htag>
    <Htag tag='h2'>Текст2</Htag>
    <Htag tag='h3'>Текст3</Htag>
    <Button appearance="primary"> Кнопка праймари</Button>
    <Button appearance="primary" arrow="right"> Кнопка праймари</Button>
    <Button appearance="ghost" arrow="down"> Кнопка праймари</Button>
    <Button appearance="ghost"> Кнопка </Button>
    <P>Та хуйлан</P>
    <P size="s">Та хуйлан</P>
    <P size={'l'}>Та хуйлан</P>


    </>
  );
}
