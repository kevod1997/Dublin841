import React, { useState } from "react";
import DayTurnsComponent from "../../components/Admin/DayTurnsComponent";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Notification from "../../components/Admin/Notification";

const AdminPage = () => {
  const MySwal = withReactContent(Swal);
  const { logout } = useAuth();
  const options = [
    { label: "Seleccionar opción", component: null },
    { label: "Ver turnos por dia", component: <DayTurnsComponent /> },
    // Otras opciones con label y component
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleOptionChange = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = () => {
    // Implementa la lógica de logout aquí
    Swal.fire({
      title: 'Seguro que queres salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cerraste Sesion!',
        )
        logout()
      }
    })
    console.log("Logout realizado");
  };

  return (
    <div className="flex-col h-full bg-slate-100">
      <div className="p-4 flex justify-center">
        <p className="text-2xl font-bold text-center">Dashboard Dublin841</p>
        <Notification />
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 items-end ml-4"
        >
          X
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <select
          className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-semibold"
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
