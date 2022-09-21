import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/Auth";
import DashboardLayout from "./Layout/Dashboard";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Register from "./components/Register";
import Article from "./components/Article";
import RouteGaurd from "./Routes/RouteGaurd";
import PageNotFound from "./components/PageNotFound";
import axios from "axios";

function App() {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGaurd type="Auth">
              <AuthLayout>
                <Login />
              </AuthLayout>
            </RouteGaurd>
          }
        />
        <Route
          path="/register"
          element={
            <RouteGaurd type="Auth">
              <AuthLayout>
                <Register />
              </AuthLayout>
            </RouteGaurd>
          }
        />
        <Route
          path="/articles"
          element={
            <RouteGaurd>
              <DashboardLayout>
                <Articles />
              </DashboardLayout>
            </RouteGaurd>
          }
        />
        <Route
          path="/articles/page/:page"
          element={
            <RouteGaurd>
              <DashboardLayout>
                <Articles />
              </DashboardLayout>
            </RouteGaurd>
          }
        />
        <Route
          path="/articles/create"
          element={
            <RouteGaurd>
              <DashboardLayout>
                <Article />
              </DashboardLayout>
            </RouteGaurd>
          }
        />
        <Route
          path="/articles/edit/:slug"
          element={
            <RouteGaurd>
              <DashboardLayout>
                <Article />
              </DashboardLayout>
            </RouteGaurd>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
