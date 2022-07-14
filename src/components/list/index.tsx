import React from 'react'
import ListItem from './listItem'

import styles from './styles.module.scss'

export type IProps = {
  title?: string,
  list: any[],
  className?: string
}

const Index = ({title, list, className}: IProps) => {
  const header = (
    <span className={styles['title']}>{title}</span>
  )

  return (
    <div className={className}>
      {title ? header : null}

      {
        list.map((item, index)=> {
          return <ListItem key={index} listItem={item}/>
        })
      }
    </div>
  )
}

export default Index