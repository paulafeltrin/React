import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './style'

export default function Nasa(){
  let Api = 'https://api.nasa.gov/planetary/apod?api_key=sgT2FAyjk6zThiycF2efrxEkDWe9vbLjsAWTCYiy'
  const [dados, setDados] = useState([])

  useEffect(()=>{
    axios.get(Api).then(Response => {
      console.log(Response.data)
      setDados(Response.data)
    }, [Api])
  })

  return(
    <>
      <S.H1>{dados.title}</S.H1>
      <S.Data>{dados.date}</S.Data>
      <S.P>{dados.explanation}</S.P>
      <S.P>{dados.media_type}</S.P>
      {
        dados.media_type === 'video' ? 
          <S.Iframe src={dados.url} frameborder="0"></S.Iframe> :
          <figure><img src={dados.url} alt={dados.url} /></figure>
     }
      <S.Copy>Copyright: {dados.copyright}</S.Copy>
    </>
  )
}
