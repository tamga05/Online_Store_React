import * as React from 'react';
import s from "./ContentCatalog.module.scss";
import Filter from "./filter/Filter";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';

import { Accordion, Button } from '@mui/material';
import NavCatalog from './nav-Catalog/NavCatalog';
import Pagination from '@mui/material/Pagination';
import ProductCard from './../components/product-card/ProductCard';
import { styled } from '@mui/material/styles';

// ProductCard ------------------
import img01 from './../../assets/images/catalog-card/image/01.jpg';
import img02 from './../../assets/images/catalog-card/image/02.jpg';
import img03 from './../../assets/images/catalog-card/image/03.jpg';
import img04 from './../../assets/images/catalog-card/image/04.jpg';
import img05 from './../../assets/images/catalog-card/image/05.jpg';
import img06 from './../../assets/images/catalog-card/image/06.jpg';
import img07 from './../../assets/images/catalog-card/image/07.jpg';
import img08 from './../../assets/images/catalog-card/image/08.jpg';
import img09 from './../../assets/images/catalog-card/image/09.jpg';
import img10 from './../../assets/images/catalog-card/image/10.jpg';
import img11 from './../../assets/images/catalog-card/image/11.jpg';
import img12 from './../../assets/images/catalog-card/image/12.jpg';

const dataCatalogCards = [
    ["Гидроцикл BRP SeaDoo GTI 130hp SE Black / Mango",img01,"1 049 500 ₽",""],
    ["Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",img02,"1 100 475 ₽","+"],
    ["Гидроцикл BRP SeaDoo GTR 230hp X California green",img03,"1 323 700 ₽",""],
    ["Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",img04,"","+"],
    ["Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",img05,"1 543 000 ₽",""],
    ["Гидроцикл BRP SeaDoo Spark 60hp 2 up",img06,"732 345 ₽",""],
    ["Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",img07,"857 666 ₽",""],
    ["Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",img08,"1 229 711 ₽","+"],
    ["Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",img09,"587 440 ₽",""],
    ["Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",img10,"587 440 ₽",""],
    ["Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla",img11,"","+"],
    ["Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",img12,"",""],
]

const MyPagination = styled(Pagination)`
    & .Mui-selected {
        border-radius: 0;
        border: 2px solid #1C62CD;
        color: #1C62CD;
        background-color: #fff !important;
    }
`;

function ContentCatalog(props) {
return (
    <div className={s.content}>
        <div className="container">
            <div className={s.breadcrumbs}>
                <Breadcrumbs aria-label="breadcrumb"separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">Главная</Link>
                    <Link underline="hover" color="inherit" href="/jetskis/">Гидроциклы</Link>
                </Breadcrumbs>
        </div>
        <h2 className={s.title}>Гидроциклы</h2>
        <NavCatalog/>
        <div className={s.catalogInner}>
                <Filter />
                <div className={s.catalogBody}>
                    <div className={s.catalogContent}>
                        <ProductCard
                            title={dataCatalogCards[0][0]}
                            image={dataCatalogCards[0][1]}
                            price={dataCatalogCards[0][2]}
                            sale={dataCatalogCards[0][3]}/>
                        <ProductCard
                            title={dataCatalogCards[1][0]}
                            image={dataCatalogCards[1][1]}
                            price={dataCatalogCards[1][2]}
                            sale={dataCatalogCards[1][3]}/>
                        <ProductCard
                            title={dataCatalogCards[2][0]}
                            image={dataCatalogCards[2][1]}
                            price={dataCatalogCards[2][2]}
                            sale={dataCatalogCards[2][3]}/>
                        <ProductCard
                            title={dataCatalogCards[3][0]}
                            image={dataCatalogCards[3][1]}
                            price={dataCatalogCards[3][2]}
                            sale={dataCatalogCards[3][3]}/>
                        <ProductCard
                            title={dataCatalogCards[4][0]}
                            image={dataCatalogCards[4][1]}
                            price={dataCatalogCards[4][2]}
                            sale={dataCatalogCards[4][3]}/>
                        <ProductCard
                            title={dataCatalogCards[5][0]}
                            image={dataCatalogCards[5][1]}
                            price={dataCatalogCards[5][2]}
                            sale={dataCatalogCards[5][3]}/>
                        <ProductCard
                            title={dataCatalogCards[6][0]}
                            image={dataCatalogCards[6][1]}
                            price={dataCatalogCards[6][2]}
                            sale={dataCatalogCards[6][3]}/>
                        <ProductCard
                            title={dataCatalogCards[7][0]}
                            image={dataCatalogCards[7][1]}
                            price={dataCatalogCards[7][2]}
                            sale={dataCatalogCards[7][3]}/>
                        <ProductCard
                            title={dataCatalogCards[8][0]}
                            image={dataCatalogCards[8][1]}
                            price={dataCatalogCards[8][2]}
                            sale={dataCatalogCards[8][3]}/>
                        <ProductCard
                            title={dataCatalogCards[9][0]}
                            image={dataCatalogCards[9][1]}
                            price={dataCatalogCards[9][2]}
                            sale={dataCatalogCards[9][3]}/>
                        <ProductCard
                            title={dataCatalogCards[10][0]}
                            image={dataCatalogCards[10][1]}
                            price={dataCatalogCards[10][2]}
                            sale={dataCatalogCards[10][3]}/>
                        <ProductCard
                            title={dataCatalogCards[11][0]}
                            image={dataCatalogCards[11][1]}
                            price={dataCatalogCards[11][2]}
                            sale={dataCatalogCards[11][3]}/>
                    </div>
                    <div className={s.catalogFooter}>
                        <MyPagination className={s.pagination} count={11} hidePrevButton hideNextButton shape="rounded"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ContentCatalog;