import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../api";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    getStudents().then((res) => setStudents(res.data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.rollno}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
