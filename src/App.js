import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/Auth";
import DashboardLayout from "./Layout/Dashboard";
import Articles from "./components/Articles";
import Login from "./components/Login";
import Register from "./components/Register";
import Article from "./components/Article";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthRoute } from "./AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <AuthLayout>
                <Login />
              </AuthLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <AuthLayout>
                <Register />
              </AuthLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/articles"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Articles />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/articles/page/:page"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Articles />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/articles/create"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Article />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/articles/edit/:slug"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Article />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
