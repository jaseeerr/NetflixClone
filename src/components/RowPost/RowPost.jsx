import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import { imageUrl,API_KEY, baseUrl } from '../../config/config'
import Youtube from "react-youtube"


function RowPost(props) {


   

    const [vId,setVId] = useState()

    const handleMovie = (id)=>{

        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{  
            console.log(response.data)
            if(response.data.results.length==0)
            {
                setVId(undefined)
            }
            setVId(response.data.results[0])
        })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const [movies,setMovies] = useState([])
    useEffect(()=>{
//  console.log(props.url)
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        })



    },[])


  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters' >
        
        {movies.map((data)=>{
            return(        <img onClick={()=>{

                handleMovie(data.id)
            }} className={props.isSmall ? 'small-poster' : 'poster'} alt='poster' key={data.backdrop_path} src={imageUrl+data.backdrop_path} />
            )
        })}
        
    </div>
   {vId && <Youtube videoId={vId.key} opts={opts}/>  }
</div>
  )
}

export default RowPost