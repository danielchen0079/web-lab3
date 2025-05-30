import React from "react";

export default function HeroSection() {
    return(
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-15s-pro_903875/images/25332.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Xiaomi 15s Pro</h1>
      <p className="mb-5">
      Xiaomi 15S Pro
      A Tribute to Xiaomi’s 15th Anniversary

      First to feature the Surging® 01 flagship processor, ushering in a new era.
      Also comes with a 15th-anniversary commemorative design, paying tribute to an extraordinary journey.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
}