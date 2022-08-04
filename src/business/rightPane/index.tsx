import alMusicGenre from 'assets/img/AlMusicGenre.png'
import pop from 'assets/img/Pop.png'
import hiphop from 'assets/img/HipHop.png'
import rock from 'assets/img/Rock.png'
import rbSoul from 'assets/img/R&BSoul.png'
import country from 'assets/img/Country.png'

import Rpane from "layout/rPane"
import Header from "./header/index"
import RankList from "./rankList/index"
import History from './history/index'

import style from './styles.module.scss'

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

      <div className={style['rp-ranklist']}>
        <RankList list={dataList} />
      </div>

      <div className={style['rp-content']}>
        <div className={style["history"]}>
          <History></History>
        </div>

        <div className={style["music-play"]}>
          222
        </div>
      </div>

    </Rpane>
  )
}

export default index