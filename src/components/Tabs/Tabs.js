import React, { useState } from 'react'
import styles from './Tabs.module.scss'
import { capitalizeFirstLetter } from '../../utils/helper'
import Special from '../Special/Special'
import FoodItems from '../FoodItems/FoodItems'

function Tabs({ config }) {
    const { menu,  restraunt_details } = config
    const tabs = Object.keys(menu)
    const [currentTab, setCurrentTab] = useState(tabs[0])

    const handleTabClick = (tab) => {
        if (currentTab !== tab) setCurrentTab(tab)
    }

    const renderTabContents = () => (
        <div className={styles.tabContents}>
            <FoodItems config={menu[currentTab]} />
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs.map((tab, index) =>
                    <div
                        key={index}
                        onClick={() => handleTabClick(tab)}
                        className={`${styles.tab} ${currentTab === tab && styles.activeTab}`}
                    >{capitalizeFirstLetter(tab)}</div>)}
            </div>
            {renderTabContents()}
        </div>
    )
}

export default Tabs