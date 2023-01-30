import axios from 'axios'

export const getTurnsRequest = async ()=> await axios.get("/api/turnos")

export const getTurnDateRequest = async (date)=> await axios.get("/api/turnos" + date)

export const deleteTurnRequest = async (id)=> await axios.delete("/api/turnos" + id)

export const createTurnRequest = async (turn)=> {
    const form = new FormData();
    for (let key in turn) {
      form.append(key, turn[key]);
    }
    return await axios.post("/api/turnos", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

