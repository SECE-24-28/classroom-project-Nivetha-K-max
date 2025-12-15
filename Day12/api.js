import axios from "axios";

const API = "http://localhost:5000/api/students";

export const getStudents = () => axios.get(API);

export const createStudent = (data) => axios.post(API, data);

// 👉 get student by id
export const getStudentById = (id) => axios.get(`${API}/${id}`);

// 👉 update student
export const updateStudent = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteStudent = (id) => axios.delete(`${API}/${id}`);
