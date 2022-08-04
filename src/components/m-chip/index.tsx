import React from 'react'
import clas from 'classnames'

import style from './styles.module.scss'

export interface IProps {
  children: React.ReactElement,
  label?: string
}

const index = ({ children, label = '' }: IProps) => {
  return (
    <div className={clas(style['my-chip'], style['m-chip'])}>
      {children}
      {label ? <span className={style['labelText']}>{label}</span> : null}
    </div>
  )
}

export default index