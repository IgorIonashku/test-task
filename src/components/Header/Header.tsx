
import { CustomModal } from '../Modal/Modal'
import  React, { FC } from "react";
import styles from './Header.module.css'
import { PieChartTwoTone } from '@ant-design/icons';
import { PizzaGraph } from '../PizzaGraph/PizzaGraph';
import { DataType } from '../../hooks/useDataApi';

export const Header:FC<{products?:DataType[]}> = ({products})=>{
    return( 
    <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <CustomModal icon={<PieChartTwoTone twoToneColor="#eb2f96" />}>
            <PizzaGraph />
        </CustomModal>
    </div>)
}