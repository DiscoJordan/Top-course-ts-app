
// import styles from "./page.module.css";
'use client'
import Htag from "./Components/Htag/Htag";
import Button from "./Components/Button/Button";
import P from "./Components/P/P";
import Tag from "./Components/Tag/Tag";
import Rating from "./Components/Rating/Rating";
import { useState } from "react";
export default function Home(): JSX.Element {

  const [rating, setRating] = useState(4);
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

    <Tag size={'m'} color="primary">Та primary</Tag>
    <Tag size={'s'} color="red">Та red</Tag>
    <Tag color="green">Та green</Tag>
    <Tag size={'s'} color="gray">Та gray</Tag>
    <Tag size={'s'} color="green">Та grren</Tag>
    <Rating rating={rating} isEditable={true} setRating={setRating} />


    </>
  );
}
