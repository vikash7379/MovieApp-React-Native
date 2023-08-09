import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetMovieTrilerQuery, useGetSeriesTrilerQuery } from '../../toolkit/ApiQuery'
import YoutubePlayer from 'react-native-youtube-iframe'

const Trailer = ({id,series = false}) => {

    const {data:trailer, isSuccess : trailerIsSuccess} = useGetMovieTrilerQuery( !series && id)
    const {data:seriesTrailer,isSuccess : seriesIsSuccess} = useGetSeriesTrilerQuery(series && id)

    const [trailerKey,setTrailerKey] = useState([]);


    useEffect(()=>{

        if(trailerIsSuccess){
            console.log("movies",trailer.results)
            let data = trailer.results
            let len = data.length;
            setTrailerKey(data[len-1].key)
        }
        else if(seriesIsSuccess){
            let data = seriesTrailer.results
            let len = data.length;
            setTrailerKey(data[len-1].key)
        }
    },[trailerIsSuccess,trailer,seriesTrailer,seriesIsSuccess])


  return (
    <View style={{
        height : 200,
        width : 'auto',
        backgroundColor : "black",
        marginBottom : 20,
        elevation : 0
    }}>
        <YoutubePlayer
            webViewStyle={{opacity : 0.99,height : 200}}
            play={true}
            height={210}
            videoId={trailerKey}
            mute
            // contentScale={1.1}
            allowWebViewZoom={true}
            initialPlayerParams={{loop : true,controls : false}}
        />
    </View>
  )
}

export default Trailer