import * as React from 'react';
import SpecsTable from '../../specs-table/SpecsTable';

import s from './CardTabs.module.scss';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';




//удалить
const primary = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

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
        font-weight: bold;
    }

    &:hover {
        border-bottom: 2px solid #1C62CD;
    }

    &.${tabUnstyledClasses.selected} {
        border-bottom: 2px solid #1C62CD;
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    gap: 35px;
    margin-bottom: 20px;
`;

export default function CardTabs(props) {
    return (
        <TabsUnstyled defaultValue={0}>
            <div className={s.tabListWrapper}>
                <TabsList>
                    <Tab>Характеристики</Tab>
                    <Tab>Наличие в магазине</Tab>
                </TabsList>
            </div>
            <TabPanel value={0}>
                <SpecsTable productData={props.productData} />
            </TabPanel>
            <TabPanel value={1}>
                Наличие в магазине
            </TabPanel>
        </TabsUnstyled>
    );
}