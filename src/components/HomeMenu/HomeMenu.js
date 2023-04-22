import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeMenu.module.scss'
import { images } from '../../assets/images'

function HomeMenu() {
    const { lightning, menu, cart } = images
    return (
        <div className={styles.homeMenu}>
            <Link to='/events'> <img src={lightning} alt='Events' /></Link>
            <Link to='/'> <img src={menu} alt='Menu' /></Link>
            <Link to='/orders'> <img src={cart} alt='Cart' /></Link>
        </div>
    )
}

export default HomeMenu