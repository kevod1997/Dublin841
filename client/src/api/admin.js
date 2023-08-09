import axios from "./axios";

export const getTurnsByDateAdmin = async (date) => axios.get(`/admin/turnos/${date}`);