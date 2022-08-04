import React from 'react'
import Breadcrumbs from 'components/breadcrumbs/index'
import Login from 'components/login/index'

import styles from './styles.module.scss'

const index = () => {
  return (
    <div className={styles['flex']}>
      <Breadcrumbs></Breadcrumbs>

      <Login></Login>
    </div>
  )
}

export default index