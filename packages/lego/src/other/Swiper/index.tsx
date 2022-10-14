import React, { forwardRef, ReactNode } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';
import './index.less';

SwiperCore.use([Pagination, Autoplay]);

export interface CustomSwiperProps {
  /** 需要轮播的图片 */
  imgs?: string[];
  /** img的样式，主要为宽度和高度 */
  style?: React.CSSProperties;
  /** 是否自动播放，delay为切换速度(ms) */
  autoplay?: {
    delay: number;
  };
  /** 每次轮播时展示几张图片 */
  imgNumPerSlide?: number;
  /** 解决除图片轮播之外的情况 */
  list?: ReactNode[];
  /** 分页器 */
  pagination?: any;
}

const CustomSwiper = forwardRef<any, CustomSwiperProps>(
  (
    { imgs = [], style, imgNumPerSlide = 1, autoplay, list = [], pagination },
    ref,
  ) => {
    const auto = autoplay?.delay
      ? { pauseOnMouseEnter: true, disableOnInteraction: false, ...autoplay }
      : false;

    return (
      <div className="td-lego-swiper-container">
        {imgs.length > 0 || list.length > 0 ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={imgNumPerSlide}
            slidesPerGroup={imgNumPerSlide}
            loop
            pagination={
              pagination === false ? false : { clickable: true, ...pagination }
            }
            autoplay={auto}
            ref={ref}
            initialSlide={0}
          >
            {imgs.length > 0
              ? imgs.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      key={index}
                      style={{
                        width: 692,
                        height: 297,
                        paddingBottom: 40,
                        ...style,
                      }}
                    />
                  </SwiperSlide>
                ))
              : list.map((ele, index) => (
                  <SwiperSlide key={index}>{ele}</SwiperSlide>
                ))}
          </Swiper>
        ) : null}
      </div>
    );
  },
);

export default CustomSwiper;
