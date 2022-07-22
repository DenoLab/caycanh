import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer-container'>
      <div className='menu-footer'>
        <div className='menu'>
          <p><strong>Hỗ trợ khách hàng</strong></p>
          <a>Giới thiệu</a>
          <a>Tin tức</a>
          <a>Tin khuyến mãi</a>
          <a>Tuyển dụng</a>
          <a>Quan hệ cổ đông</a>
        </div>
        <div className='menu'>
          <p><strong>Thông tin điện máy xanh</strong></p>
          <a>Giới thiệu</a>
          <a>Tin tức</a>
          <a>Tin khuyến mãi</a>
          <a>Tuyển dụng</a>
          <a>Quan hệ cổ đông</a>
        </div>
        <div className='menu'>
          <p><strong>TỔNG ĐÀI HỖ TRỢ (GỌI MIỄN PHÍ)</strong></p>
          <a>Giới thiệu</a>
          <a>Tin tức</a>
          <a>Tin khuyến mãi</a>
          <a>Tuyển dụng</a>
          <a>Quan hệ cổ đông</a>
        </div>
        <div className='menu'>
          <p><strong>Mạng xã hội</strong></p>
          <a>Giới thiệu</a>
          <a>Tin tức</a>
          <a>Tin khuyến mãi</a>
          <a>Tuyển dụng</a>
          <a>Quan hệ cổ đông</a>
        </div>
      </div>

      <div>© All rights reserved. Thiết kế website MonaMedia</div>
    </div>
  );
}

export default Footer;