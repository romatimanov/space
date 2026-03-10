import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./swiper.module.css";
import { Navigation } from "swiper/modules";

export default function SwiperWorks() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      pagination={{ clickable: true }}
      navigation
      scrollbar={{ draggable: true }}
      loop
      modules={[Navigation]}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`${styles.bgContent}  ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            <Image
              src="/image/work-alex-nowak.jpg"
              alt="work"
              width={300}
              height={300}
              priority
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`${styles.bgContent}  ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            <Image
              src="/image/work-alex-nowak.jpg"
              alt="work"
              width={300}
              height={300}
              priority
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`${styles.bgContent}  ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            <Image
              src="/image/work-alex-nowak.jpg"
              alt="work"
              width={300}
              height={300}
              priority
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
