import React from "react";

export default function HeroSection() {
    return(
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://cia.hyperos.mi.com/hyperos2-homepage/opening_version_pc.png?imageMogr2/thumbnail/500x/quality/80/format/webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Xiaomi Hyper OS 2</h1>
      <p className="mb-5">
      Xiaomi HyperOS
      A solid step toward a full AI ecosystem
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
}