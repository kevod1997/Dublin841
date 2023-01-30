import { useState, createContext, useContext, useEffect } from "react";
import {
  getTurnDateRequest,
  getTurnsRequest,
  deleteTurnRequest,
  createTurnRequest,
} from "../api/turnos";

const turnContext = createContext();

export const useTurns = () => {
  const context = useContext(turnContext);
  if (!context) throw new Error("Turn provider is missing");
  return context;
};

export const TurnProvider = ({ children }) => {
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getTurnsRequest();
      setTurns(res.data);
    })();
  }, []);

  const createTurn = async (turn) => {
    try {
      const res = await createTurnRequest(turn);
      setTurns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTurn = async (id) => {
    const res = await deleteTurnRequest(id);
    if (res.status === 204) {
      setTurns(turns.filter((turn) => turn._id !== id));
    }
  };

  const getTurnDate = async (date) => {
    try {
      const res = await getTurnDateRequest(date);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <turnContext.Provider
      value={{ turns, createTurn, deleteTurn, getTurnDate }}
    >
      {children}
    </turnContext.Provider>
  );
};
