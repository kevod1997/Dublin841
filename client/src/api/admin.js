import axios from "./axios";

export const getTurnsByDateAdmin = async (date) => axios.get(`/admin/turnos/${date}`);

export const deleteTurn = async (id) => axios.delete(`/admin/turnos/${id}`);