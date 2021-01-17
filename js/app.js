import { carouselAutomatic } from "./slider.js"
import {carouselControl} from "./sliderControl.js"
import { toUp } from "./toUp.js";
document.addEventListener("DOMContentLoaded",e=>{
    carouselAutomatic();
    carouselControl("next","prev",".prod__sliders-elemnt",4);
    carouselControl("logo_next","logo_prev",".logoSlider-element",7);

})

document.addEventListener("scroll",e=>{
    toUp("#btnUp")
})