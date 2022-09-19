import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/Auth";
import DashboardLayout from "./Layout/Dashboard";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Register from "./components/Register";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/articles"
          element={
            <DashboardLayout>
              <Articles />
            </DashboardLayout>
          }
        />
        <Route
          path="/articles/create"
          element={
            <DashboardLayout>
              <Article />
            </DashboardLayout>
          }
        />
        <Route
          path="/articles/edit/:slug"
          element={
            <DashboardLayout>
              <Article />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
