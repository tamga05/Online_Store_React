import s from "./SliderBaner.modules.scss";
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import baner1 from "./../../../assets/images/baner1.jpg";
import baner2 from "./../../../assets/images/baner2.jpg";

function SliderBaner(props) {

    return (
        <div className={s.sliderBaner}>
          <Carousel>
            <div>
              <img className="img"  src={baner1} alt="" />
            </div>
            <div>
              <img className="img"  src={baner2} alt="" />
            </div>
            <div>
              <img className="img"  src={baner1} alt="" />
            </div>
            <div>
              <img className="img"  src={baner2} alt="" />
            </div>
            <div>
              <img className="img"  src={baner1} alt="" />
            </div>
            <div>
              <img className="img"  src={baner2} alt="" />
            </div>
          </Carousel>
        </div>
);
}
export default SliderBaner;


