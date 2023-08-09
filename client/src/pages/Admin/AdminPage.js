import React, { useState } from "react";
import DayTurnsComponent from "./DayTurnsComponent";
import WeekTurnsComponent from "./WeekTurnsComponent";

const AdminPage = () => {
  const options = [
    { label: "Seleccionar opción", component: null },
    { label: "Ver turnos por dia", component: <DayTurnsComponent /> },
    { label: "Ver turnos por semana", component: <WeekTurnsComponent /> },
    // Otras opciones con label y component
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleOptionChange = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = () => {
    // Implementa la lógica de logout aquí
    console.log("Logout realizado");
  };

  return (
   <div className="flex-col h-full">
  <div className="p-4 flex justify-center">
    <p className="text-2xl font-bold text-center">
      Dashboard Dublin841
    </p>
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 items-end ml-4"
    >
      X
    </button>
  </div>
  <div className="mt-4 flex items-center justify-center">
    <select
      className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 font-semibold"
      onChange={(e) => {
        const selectedLabel = e.target.value;
        const selectedOption = options.find(
          (option) => option.label === selectedLabel
        );
        if (selectedOption) {
          handleOptionChange(selectedOption.component);
        }
      }}
      value={
        selectedComponent
          ? options.find((option) => option.component === selectedComponent)
          : ""
      }
    >
      {options.map((option, index) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  {!selectedComponent && (
    <p className="text-center mt-6 text-red-500">Selecciona una opción</p>
  )}
  <div className="mt-4 flex justify-center items-center max-w-screen-md mx-auto mb-4">
    {selectedComponent}
  </div>
</div>
  );
};

export default AdminPage;
