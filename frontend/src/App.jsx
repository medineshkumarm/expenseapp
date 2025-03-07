import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import Logout from "./components/Logout";
export default function App() {
  console.log(import.meta.env.VITE_API_BASE_URL);
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
            <Route path="/logout" element={<Logout />} />

          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: { fontSize: "13px" },
        }}
      />
    </UserProvider>
  );
}

const Root = () => {
  //check if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashboard if authenticated , else to login
  return isAuthenticated ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Navigate to={"/login"} />
  );
};
