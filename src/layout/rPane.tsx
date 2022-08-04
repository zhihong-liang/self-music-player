import React from 'react'
import styles from './rPane.module.scss'

export type IProps = {
  children: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
}

const index = ({children, header = null, footer = null}: IProps) => {
  return (
    <div className={styles['rightPane']}>
      <div className={styles['header']}>{header}</div>

      <div className={styles['main']}>{children}</div>

      <div className={styles['footer']}>{footer}</div>
    </div>
  )
}

export default index