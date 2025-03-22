// In a utils/auth.js file
import { jwtDecode } from "jwt-decode"; // Correct way


export const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id; // Assuming 'id' is the key in your token payload
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};