import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialCarousel.css";
import { Star, Quote } from "lucide-react";

export default function TestimonialCarousel({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="testimonial-carousel-container px-6 md:px-24">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.slice().reverse().map((t, index) => (
          <SwiperSlide key={t.id || index}>
            <div className="testimonial-slide">
              <div className="testimonial-header">
                <div className="stars">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="quote-icon" />
              </div>
              
              <div className="testimonial-text">
                <p>{t.description || t.quote}</p>
              </div>

              <div className="testimonial-footer">
                <div className="client-avatar">
                  {t.image ? (
                    <img src={t.image} alt={t.name || t.author} />
                  ) : (
                    <div className="avatar-placeholder">
                      {(t.name || t.author || "G")[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="client-info">
                  <h3>{t.name || t.author || "Guest"}</h3>
                  <span className="role">{t.designation || t.role || "Client"}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
