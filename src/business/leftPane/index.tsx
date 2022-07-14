import React from 'react'
import Logo from 'components/logo/index'
import List from 'components/list/index'

import styles from './styles.module.scss'

const index = () => {
  const list_menu: any[] = [
    {name: 'Home'},
    {name: 'Search'},
    {name: 'Likes'},
    {name: 'Playlists'},
    {name: 'Albums'},
    {name: 'Following'},
  ]

  const list_gen: any[] = [
    {name: 'Settings'},
    {name: 'Subscription'},
    {name: 'Log out'},
  ]

  return (
    <div className={styles['leftPane']}>
      <Logo className={styles['logo-box']} />

      <div className={styles['ml-lg']}>
        <List title="MENU" list={list_menu} />

        <List title="GENERAL" list={list_gen} />
      </div>
    </div>
  )
}

export default index