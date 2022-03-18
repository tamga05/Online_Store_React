import * as React from 'react';

import SearchShop from './search-shop/SearchShop';
import AddressTable from './address-table/AddressTable';

import s from './ProductTabs.module.scss';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
    color: #2f3035c7;
    cursor: pointer;
    font-size: 1.25rem;
    background: transparent;
    padding-bottom: 4px;
    border: none;
    display: flex;

    &.Mui-selected {
        color: #2F3035;
        @media screen and (max-width: 992px) {
            font-weight: bold;
        } 
    }

    &:hover {
        border-bottom: 2px solid #1C62CD;
        @media screen and (max-width: 992px) {
            border-bottom: 0;
        } 
    }

    &.${tabUnstyledClasses.selected} {
        border-bottom: 2px solid #1C62CD;
        @media screen and (max-width: 992px) {
            border-bottom: 0;
        } 
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    margin-bottom: 100px;
`;

const TabsList = styled(TabsListUnstyled)`
    
`;

export default function ProductTabs() {
    return (
        <TabsUnstyled defaultValue={3}>
            <div className={s.tabListWrapper}>
                <TabsList className={s.tabList}>
                    <Tab>О товаре</Tab>
                    <Tab>Характеристики</Tab>
                    <Tab>Отзывы</Tab>
                    <Tab>Самовывоз</Tab>
                    <Tab disabled>Доставка</Tab>
                    <Tab>Cервис</Tab>
                    <Tab>Гарантия</Tab>
                </TabsList>
            </div>
            <TabPanel value={0}>
                Что-то о таваре
            </TabPanel>
            <TabPanel value={1}>
                Опять какие-то характеристики
            </TabPanel>
            <TabPanel value={2}>
                Отзывы
            </TabPanel>
            <TabPanel value={3}>
                <div className={s.ProductTabs__shop}>
                    <SearchShop/>
                    <AddressTable/>
                </div>
            </TabPanel>
            <TabPanel value={4}>
                Доставка
            </TabPanel>
            <TabPanel value={5}>
                Сервис
            </TabPanel>
            <TabPanel value={6}>
                Гарантия
            </TabPanel>
        </TabsUnstyled>
    );
}