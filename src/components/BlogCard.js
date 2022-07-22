import React from 'react';
import './BlogCard.css'

function BlogCard({ imageUrl, title, date, content, url }) {
  return (
    <div className='DCenwoEpe'>
      <a className='YmDCZdUFr' href={url} alt='' >
        <div className='pIjvzBJAI'>
          <img className='DYPGdpZBO' src={imageUrl} alt='' ></img>
        </div>
        <div className='TxnMBLCLg'>
          <h5 className='PwPJsUpeS'>{title}</h5>
          <p className='JEHEFFBwO'>{date}</p>
          <div className='TlYEfKgIr'></div>
          <p className='vKxXHaKtD'>{content}</p>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;