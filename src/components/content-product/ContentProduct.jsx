import s from "./ContentProduct.module.scss";
import ProductCard from "./product-card/ProductCard";

import { Breadcrumbs } from "@mui/material";
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ProductTabs from "./product-tabs/ProductTabs";
import ImageGidro from './../../assets/images/content-product/product-card/gidrotsikl-brp-seedoo-gti-155hp-se.png';

const productData = {
    title:"Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
    image: ImageGidro,
    code: '366666-2',
    oldPrice: '1 200 475 ₽',
    price: '1 100 475 ₽',
    made: 'Канада',
    seats: '3',
    power: '155',
    enginesType: 'Бензиновый',
    year: '2018',
    characteristic1: 'значение 1',
    characteristic2: 'значение 2',
    characteristic3: 'значение 3',
    characteristic4: 'значение 4',
    characteristic5: 'значение 5',
}

function ContentProduct(props) {
    return (
        <main className={s.contentProduct}>
            <div className="container">
                    <div className={s.contentBreadcrumb}>
                    <Breadcrumbs
                        className={s.breadcrumb}
                        aria-label="breadcrumb"
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link underline="hover" color="inherit" href="/">
                            Главная
                        </Link>
                        <Link underline="hover" color="inherit" href="/jetskis/">
                            Гидроциклы
                        </Link>
                        <span>{productData.title}</span>
                    </Breadcrumbs>
                    </div>
                    <ProductCard productData={productData}/>
                    <ProductTabs/>
                <h3>С этим товаром покупают .....</h3>
                <h3>тут будет слайдер</h3>
            </div>
        </main>
    );
}

export default ContentProduct;