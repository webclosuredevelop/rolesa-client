import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

const Logout = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    clearToken(); // Clear the authentication token
    navigate("/login", { replace: true }); // Navigate to the home page ("/") with replace option set to true
  };

  handleLogout();
  return <>Logout Page</>;
};

export default Logout;