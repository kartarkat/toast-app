import React, { useContext } from 'react'
import styles from './Home.module.scss'
import Header from '../../components/Header'
import { images } from '../../assets/images'
import { FoodDataContext } from '../../contexts/FoodDataProvider'
import Tabs from '../../components/Tabs'

const headerConfig = {
  image: images.resLogo,
  title: 'Sacred Earth Cafe',
  icons: [ { src:images.voiceRecord, name: 'Feed Back'} , { src:images.hash, name: 'Contact'} ]
}  

function Home() {
  const { foodData } = useContext(FoodDataContext)
  const { data: { menu : { menu } }} = foodData

  return (
    <div className={styles.container}>
        <div className={styles.sectionOne}>
        <Header config={headerConfig}/>
        <Tabs config={menu} />
        </div>
    </div>
  )
}

export default Home