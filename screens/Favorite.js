import { View, Text,FlatList } from 'react-native'
import React from 'react'
import NoMovies from '../components/Common/NoMovies'
import { useSelector } from 'react-redux'
import FavoriteCard from '../components/Favorite/FavoriteCard'

const Favorite = ({navigation}) => {

  const favoriteData = useSelector((state)=>state.favorite.data);


  console.log("first",favoriteData)

  return (
    <View style={{
      backgroundColor : "#1f2340",
      flex : 1
    }}>
      {!favoriteData.length > 0 ? (
    <NoMovies navigation={navigation} msg={'Favorite'} icon ={'https://img.icons8.com/nolan/96/star.png'}/>
    ) : (
      <FlatList
        data={favoriteData}
        renderItem={({item})=> <FavoriteCard item={item}/>}
        keyExtractor={(item)=>item.id}
      />
    )}
    </View>
  )
}

export default Favorite