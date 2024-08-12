
import styles from "./page.module.css";
import Htag from "./Components/Htag/Htag";

export default function Home(): JSX.Element {

  return (
    <>
    <Htag tag='h1'>Текст</Htag>
    <Htag tag='h2'>Текст2</Htag>
    <Htag tag='h3'>Текст3</Htag>

    </>
  );
}
