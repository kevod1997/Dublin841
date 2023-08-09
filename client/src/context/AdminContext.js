import { createContext, useContext, useEffect, useState } from "react";
import { getTurnsByDateAdmin } from "../api/admin";
import { format } from "date-fns";

export const adminContext = createContext();

export const useAdmin = () => {
  const context = useContext(adminContext);
  if (!context) throw new Error("useAdmin Providar is missing");
  return context;
};

export const AdminProvider = ({ children }) => {
  const [turns, setTurns] = useState([]);
  const [turnError, setTurnError] = useState();
  const [pickDay, setPickDay] = useState();

  useEffect(() => {
    if (pickDay) {
      (async () => {
        const turnsData = await getTurnsAdmin(pickDay);
        if (Array.isArray(turnsData)) {
          setTurnError(null);
          setTurns(turnsData);
        } else {
          setTurns([]);
          setTurnError(turnsData);
        }
      })();
    }
  }, [pickDay]);

  const getTurnsAdmin = async (date) => {
    try {
      const formattedDate = format(date, "yyyy-MM-dd"); // Formatea la fecha como lo necesites para la solicitud
      const res = await getTurnsByDateAdmin(formattedDate);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(turns);
  return (
    <adminContext.Provider
      value={{ getTurnsAdmin, turns, setTurns, pickDay, setPickDay }}
    >
      {children}
    </adminContext.Provider>
  );
};
