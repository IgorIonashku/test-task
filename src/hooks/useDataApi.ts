import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";

export interface DataType {
    brand:string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: Array<string>, 
    price: number;
    rating: number;
    stock:number;
    thumbnail: string
    title: string   
}

export const useDataApi = (limmit: number) => {
    const [data, setData] = useState<DataType[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [total, setTotal] = useState<number>();
    const [limit, setLimit] = useState<number>(limmit)
    const [skip, setSkip] = useState<number>(0)
  
    useEffect(() => {
      const getData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await fetchData('/products', {
                params:{
                    limit,
                    skip
                }
            });
          setTotal(result.data.total)
          setData(result.data.products);
        } catch (error) {
          setIsError(true);
        }
  
        setIsLoading(false);
      };
  
      getData();
    }, [limit, skip]);
  
    return { data, isLoading, isError, total, setLimit, setSkip };
  };