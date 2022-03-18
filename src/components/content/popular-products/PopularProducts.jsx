import s from './PopularProducts.module.scss';
import Swiper from '../swiper/Swiper';

import { NavLink } from 'react-router-dom';

function PopularProducts(props) {
    return (
        <>
            <h2 className={s.title}>{props.title}</h2>

            <ul className={s.list}>
                <NavLink className={s.link} to={'/1'}><li className={s.item}>{props.text1}</li></NavLink>
                <NavLink className={s.link} to={'/2'}><li className={s.item}>{props.text2}</li></NavLink>
                <NavLink className={s.link} to={'/3'}><li className={s.item}>{props.text3}</li></NavLink>
                <NavLink className={s.link} to={'/4'}><li className={s.item}>{props.text4}</li></NavLink>
                <NavLink className={s.link} to={'/5'}><li className={s.item}>{props.text5}</li></NavLink>
                <NavLink className={s.link} to={'/6'}><li className={s.item}>{props.text6}</li></NavLink>
            </ul>

            <Swiper/>

            <button className={s.button} type='button'>{props.buttonText}</button>

        </>
    );
}

export default PopularProducts;
