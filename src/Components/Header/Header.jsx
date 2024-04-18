import image from "../../assets/3.jpg";
import img2 from "../../assets/imgad.jpg";
import i33 from '../../assets/hhhh.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Header = () => {
  return (
    <Swiper
      // <div className="carousel w-full my-10 animate__animated animate__slideInUp">
      //   <div id="slide1" className="carousel-item relative w-full">
      //     <img src={image} className="w-full h-screen" />
      //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      //       <a href="#slide4" className="btn btn-circle">
      //         ❮
      //       </a>
      //       <a href="#slide2" className="btn btn-circle">
      //         ❯
      //       </a>
      //     </div>
      //   </div>
      //   <div id="slide2" className="carousel-item relative w-full">
      //     <img src={img3} className="w-full h-screen" />
      //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      //       <a href="#slide1" className="btn btn-circle">
      //         ❮
      //       </a>
      //       <a href="#slide3" className="btn btn-circle">
      //         ❯
      //       </a>
      //     </div>
      //   </div>
      //   <div id="slide3" className="carousel-item relative w-full">
      //     <img src={img2} className="w-full h-screen" />
      //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      //       <a href="#slide2" className="btn btn-circle">
      //         ❮
      //       </a>
      //       <a href="#slide4" className="btn btn-circle">
      //         ❯
      //       </a>
      //     </div>
      //   </div>
      // </div>
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      <SwiperSlide>
        <div className="w-full my-10"><img className="w-full h-auto" src={img2}/></div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10"><img className="w-full h-auto" src={image}/></div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10"><img className="w-full h-auto" src={i33}/></div> 
      </SwiperSlide>
     
     
    </Swiper>
  );
};

export default Header;
