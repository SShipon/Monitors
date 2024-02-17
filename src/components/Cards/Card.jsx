import React from "react";
import Monitors from "../Monitors/Monitors";
import  icons6 from '../../assets/Monitor/info-card-2.png'
export default function Card() {
  return (
    <div className="lg:flex">
  <div class="lg:flex lg:flex-row">
     
    <div class="lg:basis-1/9">
      <Monitors></Monitors>
    </div>
    <div class="lg:basis-1/4">
      <div className="flex my-8 justify-center items-center">
        <img src={icons6} alt="" />
      </div>
    </div>
  </div>
</div>
  );
}
