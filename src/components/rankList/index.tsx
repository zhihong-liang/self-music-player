import React, { useMemo } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RankItem from "./rankItem"

import styles from './styles.module.scss'

type musicMsg = {
  name: string,
  img: string,
}

export type IProps = {
  list: musicMsg[]
}

const Index = ({ list = [] }: IProps) => {

  const header = useMemo(() => {
    return (
      <div className={styles["header"]}>
        <div className={styles["rankList-Top"]}>
          <span className={styles['topFiftyText']}>Chart: Top {list.length}</span>
        </div>

        <div className={styles["action"]}>
          <ArrowBackIosIcon sx={{ fontSize: 14 }} />
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </div>
      </div>
    )
  }, [list])

  const body = useMemo(() => {
    return (
      <div className={styles["rankList-body"]}>
        <div className={styles["rankListBodyContent"]}>
          {
            list.map((item, index) => 
              <RankItem key={index + 1} img={item.img} musicName={item.name}></RankItem>
            )
          }
        </div>
      </div>
    )
  }, [])

  return (
    <div className={styles["rankList"]}>
      {header}

      {body}
    </div>
  )
}

export default Index