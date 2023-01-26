import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carrousel() {
  return (
<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://www.simpleimageresizer.com/_uploads/photos/b6e57176/42561253_672453366473594_1212826202992126390_n_3_900x1000.jpg"
        class="block h-64 sm:h-64 md:h-72 lg:h-96 w-full object-fit"
        alt="..."
      />
      <div class="carousel-caption  md:block absolute text-center">
        <h5 class="text-sm sm:text-xl md:text-3xl opacity-50">Dublin 841</h5>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://www.simpleimageresizer.com/_uploads/photos/b6e57176/43914638_176150079961613_2039580422113879951_n_900x1000.jpg"
        class="block h-64 sm:h-64 md:h-72 lg:h-96 w-full object-fit"
        alt="..."
      />
      <div class="carousel-caption  md:block absolute text-center">
        <h5 class="text-sm sm:text-xl md:text-3xl opacity-50">Dublin 841</h5>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://i.ibb.co/p0260z3/47585089-372855590141574-5924061720092632660-n.jpg"
        class="block h-64 sm:h-64 md:h-72 lg:h-96 w-full object-fit"
        alt="..."
      />
      <div class="carousel-caption  md:block absolute text-center">
        <h5 class="text-sm sm:text-xl md:text-3xl opacity-50">Dublin 841</h5>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrousel