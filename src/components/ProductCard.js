import React from 'react'
import './ProductCard.css'

const ProductCard = ({ category, title, price, image }) => {
  return (
    <div className='sdnLHpaJE'>
      <div className='WeZfAoALd'>
        <a href='/' className='ymFOWGKnw'>
          <img className='UeeNwqHRa' src={image} alt='' />
        </a>
      </div>

      <div className='mCPtPnByo'>
        <div className='bwKxnfBVH'>
          <p className='DuzPcLHGb'>
            <a className='RDFBOYFrb' href='/'>{category}</a>
          </p>
          <p className='wZkYuuuWW'>
            <a className='XVjcTbXgx' href='/'>{title}</a>
          </p>
        </div>
        <div className='yHyOryCYf'>
          <p className='zlXPxCrVY'>{price} đ</p>
        </div>
        <div className='Vhccjcjjb'>
          <a className='sbWfFsYHn' href='/'>Thêm vào giỏ</a>
        </div>
      </div>
    </div>
  )
}



export default ProductCard