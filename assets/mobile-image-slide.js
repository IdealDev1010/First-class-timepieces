const thumbSwiper = new Swiper(".thumb-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const mainSwiper = new Swiper(".main-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbSwiper,
    },
  });