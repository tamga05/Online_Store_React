import s from "./Advise.module.scss";
import brpAudio from "./../../../assets/images/brpAudio.png";
import echomap from "./../../../assets/images/echomap.png";
import rfKey from "./../../../assets/images/rf-key.png";
import hydroSuit from "./../../../assets/images/hydro-suit.png";
import AdviseSection from "./../advise-section/AdviseSection"
import PopularProducts from "./../popular-products/PopularProducts"
import BuyWithProduct from "./../buy-with-product/BuyWithProduct"
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';






function Advise(props) {
    // const icon = { inputProps: { 'aria-label': 'FavoriteBorder  controlled' } };

    const sectionData = {
        image: brpAudio,
        price: "45 800 ₽",
        title: "BRP Audio-портативная система",
        inStock: true,
        sale: false,
        basketBtn: false
    }
    const sectionData2 = {
        image: echomap,
        title: "Garmin Echomap Plus 62cv",
        price: "45 800 ₽",
        inStock: true,
        sale: false,
        basketBtn: false
    }

    const sectionData3 = {
        image: rfKey,
        title: "RF D.E.S.S.TM Key",
        inStock: false,
        sale: true
    }

    const sectionData4 = {
        image: hydroSuit,
        title: "Мужской костюм 3мм",
        price: "7 000 ₽",
        inStock: false,
        sale: true
    }


    return (
        <div className={s.advise}>
            <section className={s.adviseSection}>
                {/* <FavoriteBorder  {...icon}/> */}
                <AdviseSection data={sectionData} data2={sectionData2} data3={sectionData3} data4={sectionData4} />
            </section>

            <section className={s.popularProducts}>
                <PopularProducts title='Популярные товары' text1='запчасти' text2='моторы' text3='шины' text4='электроника' text5='инструменты' text6='аксессуары' buttonText='Показать еще'/>
            </section>

            <section className={s.buyWithProduct}>
                <BuyWithProduct className={s.buyWithProduct} title='С этим товаром покупают' text1='запчасти' text2='моторы' text3='шины' text4='электроника' text5='инструменты' text6='аксессуары'/>
            </section>
        </div>
    );
}

export default Advise;