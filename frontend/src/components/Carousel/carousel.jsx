import React from 'react';

const LargeBannerCarousel = () => {
  return (
    <div className="w-full">
      {/* 图片轮播部分 */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/civi-5-pro_8505/images/519.png"
            className="w-full object-cover h-[80vh]" // ✅ 高度和裁剪方式，可调
            alt="Slide 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-15s-pro_903875/images/25332.png"
            className="w-full object-cover h-[80vh]"
            alt="Slide 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-pad-7-ultra_82325/images/12493.png"
            className="w-full object-cover h-[80vh]"
            alt="Slide 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-watchS4_329582/images2/698.png"
            className="w-full object-cover h-[80vh]"
            alt="Slide 4"
          />
        </div>
      </div>

      {/* 底部按钮部分 */}
      <div className="flex w-full justify-center gap-2 py-4">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default LargeBannerCarousel;
