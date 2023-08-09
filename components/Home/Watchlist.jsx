import { View, Text, Image } from 'react-native'
import React from 'react'

const Watchlist = () => {
  return (
    <View style={{
      flexDirection : 'column',
      height  : 150,
      alignItems : 'center',
      justifyContent : 'center'

    }}>
      <Image
       source={{uri : 'https://img.icons8.com/nolan/64/wish-list.png'}}
        style={{width : 60,height : 60, marginBottom : 10}}
       />
      <Text style={{color : 'white'}}>Soory No Watchlist</Text>
    </View>
  )
}

export default Watchlist