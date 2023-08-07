import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Modal from "../components/Modal";
import { useTurns } from "../context/TurnContext";

function Turnos() {
  const [selectedTime, setSelectedTime] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [selectedDay, setSelectedDay] = useState("");
  const { createTurn, setStartDate, setSelectedPeriod } = useTurns();

  const handleSelectedTime = (time) => {
    setSelectedTime(time);
  };

  const handleSelectedDay = (date) => {
    setSelectedDay(date);
  };

  const onSubmit = handleSubmit((data) => {
    const turn = {
      name: data.name,
      phone: data.phone,
      date: selectedDay,
      hour: selectedTime,
      service: data.service,
    };
    console.log(turn);
    createTurn(turn);
    setSelectedDay()
    setSelectedTime()
    setStartDate()
    setSelectedPeriod()
    reset()
  });

  return (
    <div className="flex flex-col m-4">
      <h2 className="text-xl text-center font-bold mb-4 mt-4 text-stone-600">
        TURNOS
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <form className="" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-medium text-sm text-stone-600"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Ingresa tu nombre"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-medium text-sm text-stone-600"
              >
                Telefono
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                placeholder="Ingresa tu numero"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="date"
                className="font-medium text-sm text-stone-600"
              >
                Fecha y Hora
              </label>
              {selectedTime && selectedDay ? (
                <>
                  <input
                    type="text"
                    id="date"
                    {...register("date")}
                    value={selectedDay}
                    readOnly
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  />
                  <input
                    type="text"
                    value={selectedTime}
                    readOnly
                    {...register("hour")}
                    id="hour"
                    className="mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  />
                </>
              ) : (
                ""
              )}
              <Modal
                selectedTime={selectedTime}
                handleSelectedTime={handleSelectedTime}
                selectedDay={selectedDay}
                handleSelectedDay={handleSelectedDay}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="service"
                className="font-medium text-sm text-stone-600"
              >
                Servicio
              </label>

              <select
                id="service"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                {...register("service")}
              >
                <option value={"Corte"}>Corte</option>
                <option value={"Barba"}>Barba</option>
                <option value={"Corte y Barba"}>Corte y Barba</option>
              </select>
            </div>
          </div>
          <div className="grid md:flex grid-cols-2 md:justify-end space-x-4 w-full mt-6 md:mt-10">
            <Popover>
              <PopoverHandler>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10"
                >
                  Horarios
                </button>
              </PopoverHandler>
              <PopoverContent className="m-2">
                MARTES A VIERNES DE 8 A 12 y de 16 A 20. <br /> SABADOS DE 8 A
                16.
              </PopoverContent>
            </Popover>
            <button
              className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 font-bold text-white shadow-lg shadow-green-200 transition ease-in-out duration-200 translate-10"
              type="submit"
            >
              Saca tu turno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Turnos;
