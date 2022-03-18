// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Core modules imports are same as usual
import { Navigation } from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper2.module.scss';
import ProductCard from '../../components/product-card/ProductCard';
import AdviseProducts from './../advise-products/AdviseProducts';

import img01 from './../../../assets/images/content-product/swiper/audio-portativnaya-sistema.png';
import img02 from './../../../assets/images/content-product/swiper/garmin-echomap.png';
import img03 from './../../../assets/images/content-product/swiper/jetski-key.png';
import img04 from './../../../assets/images/content-product/swiper/diving-suit.png';

const dataSwiper = [
    ["BRP Audio-портативная система",img01,"","+"],
    ["Garmin Echomap Plus 62cv",img02,"45 800 ₽",""],
    ["RF D.E.S.S.TM Key",img03,"","+"],
    ["Мужской костюм 3мм",img04,"7 000 ₽",""],
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
                prevEl: '.button-prev2',
                nextEl: '.button-next2',
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
            <div className={`button-prev2 ${s.prev}`} ></div>
            <div className={`button-next2 ${s.next}`} ></div>
        </div>
    );
};
