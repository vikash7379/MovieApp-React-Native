import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const NoMovies = ({navigation,msg,icon}) => {
  return (
    <View style={{
        flex :1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
    }}>
      <Image
       source={{uri : icon}}
        style={{width : 70,height : 72, marginBottom : 10}}
       />
      <Text style={{color : 'gray',fontSize : 18,marginTop : 10}}>😢 Soory No Movie  </Text>
      <Text style={{color : 'gray',fontSize : 17,marginTop : 10}}>Please add Movie In {msg} </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} activeOpacity={0.5} style={{
        marginTop : 24,
        borderWidth : 2,
        borderColor : 'rgba(255,99,71,0.6)',
        elevation :1,
        paddingHorizontal : 16,
        paddingVertical : 10,
        borderRadius : 6
      }}>
        <Text style={{color : 'white'}}>Browse Movies</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoMovies