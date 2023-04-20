import React, { useRef, useState } from 'react'
import styles from './FoodItems.module.scss'
import { images } from '../../assets/images'

function FoodItems({ config }) {
    const [displayItem, setDisplayItem] = useState(false)
    const itemRef = useRef(null)
    const items = Object.keys(config)

    const handleItemClick = (e, item) => {
        itemRef.current?.scrollIntoView({ behavior: 'smooth' });
        setDisplayItem(prev => !prev)
    }

    const renderFood = (food) => {
        const { item_name, item_id, item_image_url, item_type, item_price_details } = food
        const price = item_price_details[0].item_price
        return (
            <div ref={itemRef} className={styles.foodContainer} key={item_id}>
                {item_image_url ? <img className={styles.foodImg} src={item_image_url} alt={item_name} /> : ''}
                <div className={styles.description}>
                    <div>{item_name}</div>
                    <div className={styles.subItems}>
                        <div className={styles.desCont}><img src={item_type === 'veg' ? images.veg : images.nonVeg} alt="Food Type icon" />{price}</div>
                        <div className={`${styles.desCont} ${styles.addBtn}`}><img className={styles.addIcon} src={images.add} alt="Add icon" />ADD</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {items.map((item, ind) =>
                <div key={ind} className={styles.items} >
                    <div className={styles.item} onClick={(e) => handleItemClick(e, item)} >
                        <div>{item}</div>
                        <span className={styles.divider}></span>
                        <img alt={item} src={displayItem ? images.arrowDown : images.arrowUp} />
                    </div>
                    {!displayItem ? config[item].map(food => renderFood(food)) : ''}

                </div>
            )}
        </div>
    )
}

export default FoodItems