import { Chart, Tooltip, Axis, JitterPoint, Coord } from "viser-react";
import  React from "react";
import { useDataApi} from '../../hooks/useDataApi'

const scale = [{
  dataKey: 'type',
  range: [0, 1]
}];

const axis1Opts = {
  dataKey: 'price',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
};

const jitterPointOpts = {
  position: 'price*type',
  name: 'name',
  color: 'price',
  shape: 'circle',
  opacity: 0.85,
};


export const PizzaGraph = () =>{
  const {data} = useDataApi(100)
  const graphData = data?.sort((a,b)=> a.price - b.price).map(item => ({
      price: getPriceTitel(item.price),
      currentPrice: item.price,
      type:'1', 
      title: item.brand
    }))
  return (

    <Chart 
      forceFit 
      height={400} 
      padding={[ 40, 100, 80, 80 ]} 
      data={graphData || []} 
      scale={scale}>
          <Tooltip  
            htmlContent={function htmlContent(_, items) {
            const html = '<div style="position: absolute; padding:5px; visibility: hidden; z-index: 8; background-color: yellow;">';
            const titleDom = '<div class="g2-tooltip-title" style="margin-bottom: 2px;">' + items[0].point._origin.title + '</div>';
            var listDom = '<ul style="padding:0 ;margin:0; list-style:none;" class="g2-tooltip-list">'; 
            var itemDom = `<li data-index={index}><span style="background-color: ${items[0].color} ;width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span> price - ${items[0].point._origin.currentPrice.toString()} $</li>`;
            return `${html}${titleDom}${listDom}${itemDom}</ul></div>`
            }} />
          <Coord type="polar"/>
          <Axis {...axis1Opts}/>
          <JitterPoint {...jitterPointOpts}/>
    </Chart>
  )
}

function getPriceTitel (value){
  if(value >= 0 && value <= 499){
    return '0-499'
  }
  if(value >= 500 && value <= 999){
    return '500-999'
  }
  if(value >= 1000 && value <= 1499){
    return '1000-1499'
  }
  if(value >= 1500 && value <= 2000){
    return '1500-2000'
  }
}

