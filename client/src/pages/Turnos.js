import React from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Modal from '../components/Modal';

function Turnos() {

  return (
    <div class="flex flex-col m-4">
  <h2 class="text-xl text-center font-bold mb-4 mt-4 text-stone-600">
   TURNOS
  </h2>

  <div class="bg-white p-6 rounded-xl shadow-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="flex flex-col">
        <label for="name" class="font-medium text-sm text-stone-600">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Lionel Messi"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        />
      </div>

      <div class="flex flex-col">
        <label for="number" class="font-medium text-sm text-stone-600">Telefono</label>
        <input
          type="number"
          id="number"
          placeholder="2284654872"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        />
      </div>

      <div class="flex flex-col">
    <label for="date"  class="font-medium text-sm text-stone-600">Fecha y Hora</label>
        <Modal/>
      </div>

      <div class="flex flex-col">
        <label for="service" class="font-medium text-sm text-stone-600">Servicio</label>

        <select
          id="service"
          class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        >
          <option>Corte</option>
          <option>Barba</option>
          <option>Corte y Barba</option>
        </select>
      </div>
     
    </div>

    <div class="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
    <Popover>
        <PopoverHandler>
        <button  class="px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
        Horarios
      </button>
        </PopoverHandler>
        <PopoverContent className='m-2'>
          MARTES A VIERNES DE 8 A 12 y de 16 A 20. <br/> SABADOS DE 8 A 16.
        </PopoverContent>
      </Popover>
      <button class="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 font-bold text-white shadow-lg shadow-green-200 transition ease-in-out duration-200 translate-10">
        Saca tu turno
      </button>
    </div>
  </div>
</div>
  )
}

export default Turnos