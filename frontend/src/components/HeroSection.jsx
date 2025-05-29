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
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
}