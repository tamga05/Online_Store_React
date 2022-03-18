import s from "./Content.module.scss";

import Advise from "./advise/Advise";

import moto from "./../../assets/images/moto.png";
import jetSki from "./../../assets/images/jet-ski.png";
import boat from "./../../assets/images/boat.png";
import snowMoto from "./../../assets/images/snow-moto.png";
import allMoto from "./../../assets/images/all-moto.png";
import engines from "./../../assets/images/engines.png";
import SliderBaner from "./slider-baner/SliderBaner";
import Search from './search/Search';
import Products from "./products/Products";
import PopularProducts from './popular-products/PopularProducts';
import SaleBaner from "./sale-baner/SaleBaner";
import BuyWithProduct from './buy-with-product/BuyWithProduct';
import SaleCard from "./saleCard/SaleCard";
import engine from './../../assets/images/engine.png';

function Content(props) {
  const sectionData={
    title:"Квадроциклы",
    img: moto,
    link:"moto"
  }
  const sectionData2={
    title:"Гидроциклы",
    img: jetSki,
    link:"jetSki"
  }
  const sectionData3={
    title:"Катера",
    img: boat,
    link:"boat"
  }
  const sectionData4={
    title:"Снегоходы",
    img: snowMoto,
    link:"snowMoto"
  }
  const sectionData5={
    title:"Вездеходы",
    img: allMoto,
    link:"allMoto"
  }
  const sectionData6={
    title:"Двигатели",
    img: engines,
    link:"engines"
  }
  return (
    <div className={s.content}>
      <div className="container">
        <section className={s.baner}>
          <SliderBaner />
          <SaleCard className={s.saleCard} img={engine} title="Лодочный мотор Suzuki DF9.9BRS" date="31.08.2020"/>
        </section>

        <section className={s.search}>
          <Search/>
        </section>

        <section className={s.products}>
          <Products data={sectionData} data2={sectionData2} data3={sectionData3} data4={sectionData4} data5={sectionData5} data6={sectionData6}/>
        </section>

        <section className={s.popularProducts}>
          <PopularProducts title='Популярные товары' text1='запчасти' text2='моторы' text3='шины' text4='электроника' text5='инструменты' text6='аксессуары' buttonText='Показать еще'/>
        </section>

        <section className={s.saleBaner}>
          <SaleBaner data={sectionData} data5={sectionData5}/>
        </section>

        <section className={s.buyWithProduct}>
          <BuyWithProduct className={s.buyWithProduct} title='С этим товаром покупают' text1='запчасти' text2='моторы' text3='шины' text4='электроника' text5='инструменты' text6='аксессуары'/>
        </section>

        {/* <Advise /> */}
      </div>
    </div>

  );
}

export default Content;