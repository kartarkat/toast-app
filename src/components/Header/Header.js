import React from 'react'
import styles from './Header.module.scss'

function Header({ config }) {
    const { image = '', title = '', icons = [] } = config
    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}>
                <img className={styles.image} alt={title} src={image} />
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.sectionTwo}>
                {icons.map((icon, ind) =>
                    <div key={ind} className={styles.iconContainer}>
                        <img className={styles.icon} alt={icon.name} src={icon.src} />
                    </div>)}
            </div>
        </div>
    )
}

export default Header