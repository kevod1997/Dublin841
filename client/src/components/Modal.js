import React from "react";
import Calendar from "./Calendar";

function Modal() {
  return (
    <>
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalFullscreen"
      >
        Elegi tu turno
      </button>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalFullscreen"
        tabindex="-1"
        aria-labelledby="exampleModalFullscreenLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex items-center text-center justify-center center p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl text-center font-medium leading-normal text-gray-800"
                id="exampleModalFullscreenLabel"
              >
                Saca tu turno!
              </h5>

              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4 border-cyan-800 ">
              <Calendar/> 
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;