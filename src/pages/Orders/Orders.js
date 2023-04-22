import React from 'react'
import { images } from '../../assets/images'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const headerConfig = {
  image: { src: images.arrowLeft, link: '/', class: 'arrowLeft' },
  title: 'Place Order',
  icons: [{ src: images.feedback, name: 'Feed Back', link: '' }]
}

function Orders() {
  return (
    <div>
      <Header config={headerConfig} />
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginTop: '100px' }}>
        <div> No orders yet!</div>
        <div>Add something from the menu.</div>
        <Link to='/'><div>Place Order</div></Link>
      </div>
    </div>
  )
}

export default Orders