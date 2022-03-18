import s from "./AdviseSection.module.scss";
import AdviseProducts from "../advise-products/AdviseProducts";
import Swiper from "../swiper/Swiper";


function AdviseSection(props) {

    return (
        <Swiper>
            <AdviseProducts image={props.data.image} image2={props.data.image2} title={props.data.title} text={props.data.text} link={props.data.link} inStock={props.data.inStock}/>
            <AdviseProducts image={props.data2.image}  title={props.data2.title} price={props.data2.price} basketBtn={props.data2.basketBtn} inStock={props.data2.inStock}/>
            <AdviseProducts image={props.data3.image} image2={props.data3.image2} title={props.data3.title} text={props.data3.text} link={props.data3.link} inStock={props.data3.inStock}/>
            <AdviseProducts image={props.data4.image} title={props.data4.title} price={props.data4.price} inStock={props.data4.inStock}/>
        </Swiper>
        // <div className={s.adviseSection}>
        //     <AdviseProducts image={props.data.image} image2={props.data.image2} title={props.data.title} text={props.data.text} link={props.data.link}/>
        //     <AdviseProducts image={props.data2.image}  title={props.data2.title} price={props.data2.price} basketBtn={props.data2.basketBtn} inStock={props.data2.inStock}/>
        //     <AdviseProducts image={props.data3.image} image2={props.data3.image2} title={props.data3.title} text={props.data3.text} link={props.data3.link} inStock={props.data3.inStock}/>
        //     <AdviseProducts image={props.data4.image} title={props.data4.title} price={props.data4.price} inStock={props.data.inStock}/>
        // </div>
    );
}

export default AdviseSection;