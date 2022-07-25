import React, { useState, useEffect } from 'react'
import { Banner, BlogCard, ProductCard, ImageCard } from '../components';
import { Swiper, SwiperSlide } from "swiper/react";
import { bonsai, cayXuongRong, cayCanhTrongNha, cayCanhVanPhong, cayCanhSenDa, kinhNghiemMeoVat } from '../data/data'
import './Homepage.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Homepage = ({ screenSize }) => {

  return (
    <div className='eUEaWUPKr'>

      <Banner />

      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Khuyến mãi và sản phẩm hot</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 6 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {bonsai.map((bonsai) => (
              <SwiperSlide className='NkOvDkASi'>
                <ImageCard category="Bonsai" image={bonsai.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Bonsai</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 5 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={0}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {bonsai.map((bonsai) => (
              <SwiperSlide className='FQKmnklDq'>
                <ProductCard category="Bonsai" title={bonsai.title} price={bonsai.price} image={bonsai.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Cây xương rồng</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 5 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={0}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cayXuongRong.map((cayXuongRong) => (
              <SwiperSlide className='FQKmnklDq'>
                <ProductCard category="Cây xương rồng" title={cayXuongRong.title} price={cayXuongRong.price} image={cayXuongRong.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Cây cảnh trong nhà</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 5 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={0}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cayCanhTrongNha.map((cayCanhTrongNha) => (
              <SwiperSlide className='FQKmnklDq'>
                <ProductCard category="Cây cảnh trong nhà" title={cayCanhTrongNha.title} price={cayCanhTrongNha.price} image={cayCanhTrongNha.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Cây cảnh văn phòng</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 5 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={0}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cayCanhVanPhong.map((cayCanhVanPhong) => (
              <SwiperSlide className='FQKmnklDq'>
                <ProductCard category="Cây cảnh văn phòng" title={cayCanhVanPhong.title} price={cayCanhVanPhong.price} image={cayCanhVanPhong.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <div className='ylfDaVdmG'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Cây cảnh sen đá</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 5 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={0}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cayCanhSenDa.map((cayCanhSenDa) => (
              <SwiperSlide className='FQKmnklDq'>
                <ProductCard category="Cây cảnh sen đá" title={cayCanhSenDa.title} price={cayCanhSenDa.price} image={cayCanhSenDa.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <div className='hRvANLjHi'>
        <div className='igkVDMDEM'>
          <a className='UmgIhHzCT' href='/' >Kinh nghiệm - Mẹo vặt</a>
        </div>
        <div className='NdlrugOIj'>
          <Swiper
            slidesPerView={screenSize > 850 ? 4 : (screenSize > 550 ? 3 : 2)}
            spaceBetween={20}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {kinhNghiemMeoVat.map((kinhNghiemMeoVat) => (
              <SwiperSlide className='FQKmnklDq'>
                <BlogCard className='xvkqiaKbF' category="Kinh nghiệm - Mẹo vặt" title={kinhNghiemMeoVat.title} date={kinhNghiemMeoVat.date} imageUrl={kinhNghiemMeoVat.imageUrl} content={kinhNghiemMeoVat.content} url={kinhNghiemMeoVat.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default Homepage