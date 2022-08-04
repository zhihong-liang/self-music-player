import { useState } from 'react'
import { Card, CardMedia, CardActionArea, CardContent, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

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
      <Box className={style['bgmImgBox']}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image={img}
          >
          </CardMedia>
          <div className={style['playBtn']}>
            {isPlay ? <StopIcon sx={{ color: '#ffffff', fontSize: 17 }} /> : <PlayArrowIcon sx={{ color: '#ffffff', fontSize: 17 }} />}
          </div>
        </CardActionArea>
      </Box>
      <CardContent sx={{padding: '0 18px 5px'}}>
        <div className={style['music-name']}>{musicName}</div>
        <div className={style['describe']}>Top 50</div>
      </CardContent>
    </Card>
  )
}

export default Index