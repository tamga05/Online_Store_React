// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Core modules imports are same as usual
import { Navigation} from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper.module.scss';
import AdviseProducts from './../advise-products/AdviseProducts';
import ProductCard from '../../components/product-card/ProductCard';

// ProductCard ------------------
import img01 from './../../../assets/images/content-product/swiper/backpack.png';
import img02 from './../../../assets/images/content-product/swiper/life-jacket.png';
import img03 from './../../../assets/images/content-product/swiper/audio-system.png';
import img04 from './../../../assets/images/content-product/swiper/rescue-equipment.png';


const dataSwiper = [
    ["Водонепроницаемый Рюкзак",img01,"9 800 ₽",""],
    ["Спасательный жилет BRP Men's Airflow PFD",img02,"6 900 ₽","+"],
    ["BRP Audio-Premium System",img03,"68 000 ₽",""],
    ["Спасательное снаряжение",img04,"","+"],
]

// eslint-disable-next-line
export default () => {

    return (
        <div className={s.wrapper}>
            <Swiper className={s.swiper}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
                navigation={{
                prevEl: '.button-prev',
                nextEl: '.button-next',
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className={s.slide}>
                    <ProductCard 
                        title={dataSwiper[0][0]} 
                        image={dataSwiper[0][1]}
                        price={dataSwiper[0][2]}
                        sale={dataSwiper[0][3]}/>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <ProductCard
                        title={dataSwiper[1][0]}
                        image={dataSwiper[1][1]}
                        price={dataSwiper[1][2]}
                        sale={dataSwiper[1][3]} />
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <ProductCard
                        title={dataSwiper[2][0]}
                        image={dataSwiper[2][1]}
                        price={dataSwiper[2][2]}
                        sale={dataSwiper[2][3]} />
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <ProductCard
                        title={dataSwiper[3][0]}
                        image={dataSwiper[3][1]}
                        price={dataSwiper[3][2]}
                        sale={dataSwiper[3][3]} />
                </SwiperSlide>      
            </Swiper>
            <div className={`button-prev ${s.prev}`} ></div>
            <div className={`button-next ${s.next}`} ></div>
        </div>
    );
};
