import axios from "axios";

const API = "http://localhost:5000/api/students";

export const getStudents = () => axios.get(API);
export const createStudent = (data) => axios.post(API,data);
