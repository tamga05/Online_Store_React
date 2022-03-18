import s from "./ProductSection.module.scss";
import {NavLink} from "react-router-dom";


function ProductSection(props) {
  return (
    <article className={s.productSection}>
      <div className={s.wrapper}>
        <h1 className={s.title}>{props.title}</h1>
        <NavLink className={s.link} to={props.link}>Подробнее</NavLink>
      </div>
      <div className={s.imgWrap}>
        <img className={s.img} src={props.img} alt="Picture of the mode of transport" />
      </div>
      
    </article>
  );
}

export default ProductSection;