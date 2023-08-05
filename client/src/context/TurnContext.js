import { useState, createContext, useContext, useEffect } from "react";
import { getTurnsByDate, createTurnRequest } from "../api/turns";
import { format } from "date-fns";

const turnContext = createContext();

export const useTurns = () => {
  const context = useContext(turnContext);
  if (!context) throw new Error("Turn provider is missing");
  return context;
};

export const TurnProvider = ({ children }) => {
  const [turns, setTurns] = useState([]);
  const [turnError, setTurnError] = useState(); 
  const [startDate, setStartDate] = useState();

  useEffect(() => {
    if (startDate) {
      (async () => {
        const turnsData = await getTurns(startDate); // Pasa startDate como argumento
        if (Array.isArray(turnsData)) {
          setTurnError(null); // Resetea el mensaje de error si la solicitud es exitosa
          setTurns(turnsData);
        } else if (typeof turnsData === "object" && turnsData.error) {
          setTurns([]); // Resetea los turnos a un array vacío en caso de un error
          setTurnError(turnsData.error); // Establece el mensaje de error
        }
      })();
    }
  }, [startDate]);

  const createTurn = async (turn) => {
    try {
      const res = await createTurnRequest(turn);
      setTurns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

//   const deleteTurn = async (id) => {
//     const res = await deleteTurnRequest(id);
//     if (res.status === 204) {
//       setTurns(turns.filter((turn) => turn._id !== id));
//     }
//   };

  const getTurns = async (date) => {
      try {
        console.log(date);
        const formattedDate = format(date, "yyyy-MM-dd"); // Formatea la fecha como lo necesites para la solicitud
        console.log(formattedDate);
        const res = await getTurnsByDate(formattedDate);
        return res.data;
      } catch (error) {
        console.log(error);
      }
  };
  

  return (
    <turnContext.Provider
      value={{ turns, startDate, setStartDate, turnError, createTurn }}
    >
      {children}
    </turnContext.Provider>
  );
};
