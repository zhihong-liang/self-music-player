import React from 'react'
import HistoryMusicItem from 'components/historyListItem/index'
import Button from '@mui/material/Button';

import swbl from 'assets/img/SheWillBeLoved.png'
import dblb from 'assets/img/DumbLittleBug.png'
import iwby from 'assets/img/ItWouldBeYou.png'
import amg from 'assets/img/AlMusicGenre.png'

import style from './styles.module.scss'

const index = () => {
  const list = [
    {img: swbl, amount: '100k', songName: 'She Will Be Loved', author: 'Maroon 5'},
    {img: dblb, amount: '90k', songName: 'Dumb Little Bug', author: 'Em Beihold'},
    {img: iwby, amount: '89k', songName: 'It Would Be You', author: 'Ben Hector'},
    {img: amg, amount: '70k', songName: 'Al Music Genre', author: 'Maroon 5'},
  ]

  return (
    <div className={style['history-box']}>
      <div className={style['header']}>
        <p className={style['historyText']}>Listening History</p>

        <Button variant="text" sx={{color: '#7C8DB5'}}>See All</Button>
      </div>

      <div className={style["content"]}>
        <div className={style["historyList"]}>
          {
            list.map(item => {
              return (
                <HistoryMusicItem 
                  key={item.songName}
                  img={item.img}
                  amount={item.amount}
                  songName={item.songName}
                  author={item.author}
                />
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default index