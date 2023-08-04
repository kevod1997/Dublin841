import { useEffect, useState } from "react";

const Turnos = ({ selectedTime, handleSelectedTime }) => {
  const times = [
    "08:00",
    "09:30",
    "11:00",
    "13:30",
    "15:00",
    "17:30",
    "19:00",
    "10:00",
    "12:30",
    "14:00",
    "16:30",
    "18:00",
    // ... Agrega más horas de prueba aquí
  ];

  const [selectedPeriod, setSelectedPeriod] = useState("");
  
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const handleTimeSelect = (time) => {
    handleSelectedTime(time); // Llama a la función del abuelo para guardar la hora seleccionada
  };

  // Filtrar los turnos según las opciones seleccionadas por el usuario
  const filteredTimes = times.filter((time) => {
    const hour = parseInt(time.split(":")[0], 10);
    if (selectedPeriod === "morning") {
      return hour >= 8 && hour < 13;
    } else if (selectedPeriod === "afternoon") {
      return hour >= 13 && hour < 20;
    } else {
      return ""; // Mostrar todos los turnos si no se selecciona un período específico
    }
  });

  return (
    <div className="mt-8 mb-4">
      <div className="flex items-center mb-4">
        <p className="text-lg font-medium leading-normal text-gray-800 ml-3">
          Horarios disponibles
        </p>
        <div className="ml-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedPeriod === "morning"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handlePeriodChange("morning")}
          >
            Mañana
          </button>
          <button
            className={`px-4 py-2 rounded-lg ml-2 ${
              selectedPeriod === "afternoon"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handlePeriodChange("afternoon")}
          >
            Tarde
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-2lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {filteredTimes.map((time, index) => {
            return (
              <button
                key={index}
                className={`bg-white p-3 md:p-4 rounded-lg shadow hover:opacity-50 ${
                  time === selectedTime
                    ? "bg-green-500 text-white hover:opacity-100"
                    : ""
                }`}
                onClick={() => handleTimeSelect(time)}
              >
                <p className="text-lg font-medium text-gray-800">{time}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Turnos;
