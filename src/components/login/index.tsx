import React from 'react'
import Avatar from '@mui/material/Avatar';

import touxiang from 'assets/img/touxiang.jpg'

import styles from './style.module.scss'

const index = () => {
  return (
    <div className={styles['login']}>
      <Avatar src={touxiang} variant="rounded"></Avatar>
      
      <div className={styles["info"]}>
        <div className={styles['name']}>Kazaf</div>
        <span className={styles['signature']}>life is f**k movie</span>
      </div>
    </div>
  )
}

export default index