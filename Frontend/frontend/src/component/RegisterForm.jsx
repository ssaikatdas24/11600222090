import { useState } from "react";
import { useRegister } from "../hook/useRegister";
import "../style/form.css";

export default function RegisterForm() {
  const [form, setForm] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: ""
  });

  const { loading, error, success, handleRegister } = useRegister();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(form);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Register Company</h2>

      {["companyName","ownerName","rollNo","ownerEmail","accessCode"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={onChange}
          required
        />
      ))}

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      {error && <p className="error">{JSON.stringify(error)}</p>}
      {success && <p className="success">Registered Successfully!</p>}
    </form>
  );
}
