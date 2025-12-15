import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent} from "../api";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  // ✅ DELETE FUNCTION (outside JSX)
  const removeStudent = async (rollno) => {
    await deleteStudent(rollno);
    loadStudents();
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
            <tr key={s._id}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <Link to={`/edit/${s.rollno}`}>Edit</Link>
                <button onClick={() => removeStudent(s.rollno)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
