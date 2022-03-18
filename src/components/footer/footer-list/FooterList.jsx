import React from "react";
import s from "./FooterList.module.scss";


function FooterList(props) {

   return (
        <div className={s.footerList}>
            <h6 className={s.header}><b>{props.title}</b></h6>
            <ul className={s.list}>
                <li className={s.listItem}><a className={s.link}>{props.value1}</a></li>
                <li className={s.listItem}><a className={s.link}>{props.value2}</a></li>
                <li className={s.listItem}><a className={s.link}>{props.value3}</a></li>
                <li className={s.listItem}><a className={s.link}>{props.value4}</a></li>
            </ul>
        </div>
   );
}

export default FooterList;