import API from "./API";
import { toast } from "react-toastify";

// LOGIN FUNCTION
export const handleLogin = async (e, email, password, role) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/login", { email, password, role });
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      window.location.replace("/");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Login failed");
  }
};

// REGISTER FUNCTION
export const handleRegister = async (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();

  // Dynamically construct request body based on role
  let data = {
    role,
    email,
    password,
    phone,
    address,
    website,
  };

  if (role === "admin" || role === "donor") {
    data.name = name;
  } else if (role === "organisation") {
    data.organisationName = organisationName;
  } else if (role === "hospital") {
    data.hospitalName = hospitalName;
  }

  try {
    const res = await API.post("/auth/register", data);

    if (res.data.success) {
      toast.success(res.data.message);
      window.location.replace("/login");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Registration failed");
  }
};
