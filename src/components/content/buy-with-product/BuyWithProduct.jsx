import s from './BuyWithProduct.module.scss';
import Swiper2 from '../swiper/Swiper2';

import { NavLink } from 'react-router-dom';


function BuyWithProduct(props) {
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

            <Swiper2 className={s.swiper}/>

        </>
    );
}

export default BuyWithProduct;
