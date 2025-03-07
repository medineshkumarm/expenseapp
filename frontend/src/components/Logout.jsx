import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // Clear user session
    navigate("/login"); // Redirect to login page
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
