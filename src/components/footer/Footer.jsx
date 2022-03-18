import React from "react";
import s from "./Footer.module.scss";
import Mailing from "./mailing/Mailing";
import FooterList from "./footer-list/FooterList";
import Social from "./social/Social";


function Footer(props) {

   return (
    <div className={s.footer}>
        <div className="container">
            <div className={s.footerContent}>
                <div className={s.top}>
                    <Mailing></Mailing>
                    <FooterList className={s.info} title='Информация' value1='О компании' value2='Контакты' value3='Акции' value4='Магазины'/>
                    <FooterList className={s.magazin} title='Интернет-магазин' value1='Доставка и самовывоз' value2='Оплата' value3='Возврат-обмен' value4='Новости'/>
                    <Social></Social>
                </div>
                <div className={s.bottom}>
                    <a className={s.footerLink} href='#'>Договор оферты</a>
                    <a className={s.footerLink} href='#'>Политика обработки персональных данных</a>
                </div>
            </div>    
        </div>
    </div>
    
);
}

export default Footer;
