import React from 'react'
import Rpane from "layout/rPane"
import RankList from "components/rankList/index"
import Header from "./header/index"
import alMusicGenre from 'assets/img/AlMusicGenre.png'
import pop from 'assets/img/Pop.png'
import hiphop from 'assets/img/HipHop.png'
import rock from 'assets/img/Rock.png'
import rbSoul from 'assets/img/R&BSoul.png'
import country from 'assets/img/Country.png'

const index = () => {
  const dataList = [
    {
      name: 'Al Music Genre',
      img: alMusicGenre
    },
    {
      name: 'Pop',
      img: pop
    },
    {
      name: 'Hip Hop',
      img: hiphop
    },
    {
      name: 'Rock',
      img: rock
    },
    {
      name: 'R&B Soul',
      img: rbSoul
    },
    {
      name: 'Country',
      img: country
    },
  ]

  const header = <Header></Header>

  return (
    <Rpane header={header}>

      <RankList list={dataList} />

    </Rpane>
  )
}

export default index