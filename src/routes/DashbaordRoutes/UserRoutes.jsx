import { Routes, Route } from "react-router-dom";
import EditUser from "../../pages/DashboardPages/Users/EditUser";
import Users from "../../pages/DashboardPages/Users/Users";

function UserRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
