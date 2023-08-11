import { View, Text,FlatList } from 'react-native'
import React from 'react'
import NoMovies from '../components/Common/NoMovies'
import { useSelector } from 'react-redux'
import FavoriteCard from '../components/Favorite/FavoriteCard'
import { StatusBar } from 'expo-status-bar'

const Favorite = ({navigation}) => {

  const favoriteData = useSelector((state)=>state.favorite.favData);

  console.log("fav data ",favoriteData)

  return (
    <View style={{
      backgroundColor : "#1f2340",
      flex : 1
    }}>
      <StatusBar style="light"/>

      {!favoriteData.length > 0 ? (
    <NoMovies navigation={navigation} msg={'Favorite'} icon ={'https://img.icons8.com/nolan/96/star.png'}/>
    ) : (
      <FlatList
        data={favoriteData}
        renderItem={({item})=> <FavoriteCard item={item} navigation={navigation}/>}
        keyExtractor={(item)=>item.id}
      />
    )}
    </View>
  )
}

export default Favorite