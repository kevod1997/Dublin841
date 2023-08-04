import { addDays, format, getDay } from "date-fns";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es)


function Calendar({ selectedDay, handleSelectedDay}) {
  const [startDate, setStartDate] = useState();
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 1;
  };

    // Función para hacer la solicitud al backend con la fecha seleccionada
    const fetchTurnos = async (date) => {
        try {
          if (date) { // Verifica si date tiene un valor antes de realizar la solicitud
            // Realiza aquí la solicitud al backend, utilizando la fecha seleccionada
            const formattedDate = format(date, 'yyyy-MM-dd'); // Formatea la fecha como lo necesites para la solicitud
            console.log(formattedDate);
            const response = await fetch(`http://localhost:4000/turnos/${formattedDate}`);
            const data = await response.json();
            console.log(data); // Aquí puedes procesar la respuesta del backend
          }
        } catch (error) {
          console.error("Error al obtener los turnos:", error);
        }
    }
  
    // Efecto que se ejecuta cada vez que cambia la fecha seleccionada
    useEffect(() => {
      fetchTurnos(startDate);
    }, [startDate]);

  return (
    <div className="flex justify-start text-lg mt-2">
      <p className="ml-3">Fecha:</p>
      <DatePicker
        filterDate={isWeekday}
        className="ml-3"
        dateFormat="dd/MM/yyyy"
        locale="es"
        minDate={new Date()}
        maxDate={addDays(new Date(), 30)}
        onChange={(date) => setStartDate(date)}
        placeholderText="Elegi una fecha"
        selected={startDate}
      />
    </div>
  );
}

export default Calendar;
