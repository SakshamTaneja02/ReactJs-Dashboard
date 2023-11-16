import React from 'react'
import { SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Tooltip, ChartComponent, LineSeries, Legend} from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  
  const { currentMode } = useStateContext()
  
  return (
    <ChartComponent id="line-chart" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} tooltip={{enable: true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}></SeriesDirective>
          ))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
