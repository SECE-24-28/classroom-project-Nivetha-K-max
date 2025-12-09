import { useState } from "react";

const Display7 = () => {
  const [students, setStudents] = useState({
    name: "",
    age: "",
    course: ""
  });

  // Separate error messages
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    course: ""
  });

  const change = (e) => {
    const { name, value } = e.target;

    // Update field values
    setStudents((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear the error message as user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const formsubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validation
    if (!students.name.trim()) newErrors.name = "Name is required";
    if (!students.age.trim()) newErrors.age = "Age is required";
    if (!students.course.trim()) newErrors.course = "Course is required";

    setErrors(newErrors);

    // Stop submit if errors exist
    if (Object.keys(newErrors).length > 0) return;

    console.log("The data is:", students);
  };

  return (
    <>
      <h1>Display7 component</h1>

      <input
        onChange={change}
        name="name"
        value={students.name}
        placeholder="Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <br />

      <input
        onChange={change}
        name="age"
        value={students.age}
        placeholder="Age"
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      <br />

      <input
        onChange={change}
        name="course"
        value={students.course}
        placeholder="Course"
      />
      {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
      <br />

      <h2>Name: {students.name}</h2>
      <h2>Age: {students.age}</h2>
      <h2>Course: {students.course}</h2>

      <button onClick={formsubmit}>Submit</button>
    </>
  );
};

export default Display7;
