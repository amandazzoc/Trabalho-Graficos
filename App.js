/* import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'

export default function App(){

  const fill = 'rgb(8, 33, 155)'
  const data = [-60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60]

  return(
  <View style ={{flex: 1 , justifyContent: 'center'}}>
    <BarChart
 style={{ height: 500 }}
 horizontal={false}
 data={data}
 svg={{fill}}
 contentInset={{ top: 0, bottom: 0 }}
   >

    <Grid></Grid>

</BarChart>


  </View>
);

} */

import React from 'react'
import { View } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import {Text} from 'react-native-svg';
 
export default function App(){
const data=[10,20,30,40,50,60,70,80,90,100];
const pieData = data.map((value, index) => ({
   value,
   key: `${index}=${value}`,
   svg:{
    fill: (
      '#' + ((Math.random() * 0x2fa39f) << 0 ).toString(16) + '000000'
    ).slice(0,7)
   }
}));


const Label = ({slices}) => {
  return slices.map((slice, index) => {
    const {pieCentroid, data} = slice;
    return(
      <Text
        key={`label-${index}`}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill = "black"
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={15}
      >
        {data.value}
      </Text>
    )
  })
}

return(
  <View style ={{flex: 1 , justifyContent: 'center'}}>
    <PieChart
      style={{height: 400}} 
      data={pieData} 
     >
    <Label></Label>

     </PieChart>

  </View>
);

}