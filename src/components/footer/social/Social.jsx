import React from "react";
import s from "./Social.module.scss";
import inst from "./../../../assets/img/instagram.svg";
import vk from "./../../../assets/img/vk.svg";
import facebook from "./../../../assets/img/facebook.svg";
import youtube from "./../../../assets/img/youtube.svg";


function Social(props) {

   return (
      <div className={s.social}>
         <img src={inst} className={s.img}></img>
         <img src={vk} className={s.img}></img>
         <img src={facebook} className={s.img}></img>
         <img src={youtube} className={s.img}></img>
      </div>
   );
}

export default Social;