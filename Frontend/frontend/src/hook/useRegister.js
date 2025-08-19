import { useState } from "react";
import { registerUser } from "../api/registerApi";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await registerUser(formData);
      setSuccess(response);
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, handleRegister };
};
