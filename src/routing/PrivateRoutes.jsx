import { Navigate, Route, Routes } from "react-router-dom";
import MasterLayout from "../pages/layout/MasterLayout";
import DashboardWrapper from "../pages/DashboardWrapper";
import Test from "pages/Test";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route Component={MasterLayout}>
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
