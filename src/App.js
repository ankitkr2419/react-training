import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import ProfileDetails from "./Component/UserProfile/ProfileDetails";
import AuthPage from "./pages/AuthPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthPage />}></Route>
        )}
        <Route
          path="/users"
          element={
            authCtx.isLoggedIn ? <UsersPage /> : <Navigate to={"/auth"} />
          }
        >
          <Route path="userdetails/:id" element={<ProfileDetails />}></Route>
        </Route>
        <Route
          path="/blogs"
          element={
            authCtx.isLoggedIn ? <BlogPage /> : <Navigate to={"/auth"} />
          }
        >
          <Route path="userdetails/:id" element={<ProfileDetails />}></Route>
        </Route>
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
