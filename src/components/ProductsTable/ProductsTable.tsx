import { Table } from "antd";
import  React from "react";
import { ColumnsType } from "antd/lib/table";
import { FC } from "react"
import { DataType, useDataApi } from "../../hooks/useDataApi";
import { Header } from "../Header/Header";



const columns: ColumnsType<DataType> = [
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Title',
      dataIndex: 'title',

    },
    {
      title: 'Price',
      dataIndex: 'price',

    },
    {
      title: 'Rating',
      dataIndex: 'rating',

    },
    {
      title: 'Category',
      dataIndex: 'category',

    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      render: (text: string,record) => <img width='100' height={70} src={text} alt={record.title}/>,
    },
  ];


export const ProductsTable:FC = () =>{
    const {data, isLoading, total, setLimit, setSkip} = useDataApi(10)

    const handleChangeSize = (page: number, pageSize: number) =>{
        setLimit(pageSize)
        if(page !== 1){
            setSkip((page-1) * pageSize)
        }
    }
      
    
return <>
            <Header />
            <Table
                columns={columns}
                dataSource={data?.map(item=>({...item,key: item.id}))}
                scroll={{ x: 500, y: 500 }}
                loading={isLoading}
                pagination={{ 
                    total: total,
                    onChange:handleChangeSize
                }}
            />
        </>
}