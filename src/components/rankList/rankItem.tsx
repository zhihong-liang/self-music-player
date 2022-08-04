import React, { useState } from 'react'
import { Card, CardMedia, CardActionArea, CardContent, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Typography from '@mui/material/Typography';

import style from './rankItem.module.scss'

export interface IProps {
  musicName: string,
  img: string,
}

const Index = ({ img = '', musicName = '' }: IProps) => {
  const [isPlay, setIsPlay] = useState(false)

  const handleClick = function () {
    setIsPlay(!isPlay)
  }

  return (
    <Card className={style['rankItem']} sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={handleClick}>
        <Box className={style['bgmImgBox']}>
          <CardMedia
            component="img"
            height="140"
            image={img}
          >
          </CardMedia>
          <div className={style['playBtn']}>
            {isPlay ? <StopIcon sx={{ color: '#ffffff', fontSize: 17 }} /> : <PlayArrowIcon sx={{ color: '#ffffff', fontSize: 17 }} />}
          </div>
        </Box>
      </CardActionArea>
      <CardContent>
        <Typography variant="subtitle2" component="div">
          {musicName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Index