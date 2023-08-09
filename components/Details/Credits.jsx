import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { useGetCreditsQuery } from '../../toolkit/ApiQuery'
import { posterURL } from '../../constants/url';

const Credits = ({id}) => {

    const {data : creditData , isSuccess} = useGetCreditsQuery(id);

  return (
    <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={isSuccess && creditData.cast.slice(0,7)}
            renderItem={({item})=><RenderUi item={item}/>}
            keyExtractor={(item)=>item.id}

        />
    </View>
  )
}

const RenderUi = ({item}) =>(
    <View key={item.id} style={{width : 76, marginRight :14,marginVertical : 10}}>
        <Image source={{uri : posterURL + item.profile_path}}
            style={{height : 75,width : 75, borderRadius : 50}}
        />
        <Text style={{color : '#e8e8e8',opacity : 0.8, fontSize : 13,marginTop : 8,textAlign : 'center'}}>{item.name}</Text>
    </View>
)

export default Credits