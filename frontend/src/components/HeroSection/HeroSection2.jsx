import React from "react";

export default function HeroSection() {
    return(
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-pad-7-ultra_82325/images/12493.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Xiaomi Pad 7 Ultra</h1>
      <p className="mb-5">
      Xuanwu® 01
      3nm Flagship Processor
      Second-generation 3nm process technology
      3,004,137 AnTuTu Benchmark Score in Laboratory Environment (Comprehensive Score)
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
}