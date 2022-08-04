import React from 'react'
import { Stack } from '@mui/material';
import Mchip from 'components/m-chip/index'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SmsIcon from '@mui/icons-material/Sms';
import FavoriteIcon from '@mui/icons-material/Favorite';

import style from './styles.module.scss'

export interface IProps {
  img: string,
  amount: string,
  songName: string,
  author: string
}

const index = ({ img = '', amount = '', songName = '', author = '' }: IProps) => {
  return (
    <div className={style['history-item-box']}>
      <div className={style["body"]}>

        <div className={style["img"]}>
          <img src={img} width="100px" height="100px" />
        </div>

        <div className={style["songInfo"]}>
          <div className={style['msgName']}>{songName}</div>
          <span className={style['author']}>{author}</span>
        </div>

        <div className={style["operate"]}>
          <Stack direction="row">
            <Mchip label={amount}>
              <PlayArrowIcon sx={{ color: '#7C8DB5', fontSize: '22px' }}/>
            </Mchip>
            <Mchip>
              <SmsIcon sx={{ color: '#7C8DB5', fontSize: '15px' }}/>
            </Mchip>
            <Mchip>
              <FavoriteIcon fontSize='small' sx={{ color: '#FF7E3A', fontSize: '15px' }} />
            </Mchip>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default index