import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { Route, Routes, Navigate } from "react-router-dom";

// Admin Components
import AdminNav from "./components/nav/AdminNav";
import AdminDashboard from "./components/adminuser/Dashboard/AdminDashboard";

// Invoices Components
import Invoices from "./components/adminuser/Invoices/Invoices";
import InvoicesTable from "./components/adminuser/Invoices/InvoicesTable";

//Fees Components
import Fees from "./components/adminuser/Fees/Fees";
import AddFeeTypeForm from "./components/adminuser/Fees/AddFeeTypeForm";
import EditFeeTypeForm from "./components/adminuser/Fees/EditFeeTypeForm";

//Students Component
import Students from "./components/adminuser/Students/Students";
import Reports from "./components/adminuser/Reports";

// Users Components
import Users from "./components/adminuser/Users/Users";
import UserList from "./components/adminuser/Users/UserList";
import UserListTable from "./components/adminuser/Users/UserListTable";
import AddUserForm from "./components/adminuser/Users/AddUserForm";

function App() {
  return (
    <div className="App">
      <AdminNav />
      <Container maxWidth="xl" minWidth="md">
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/students" element={<Students />}></Route>

          {/* INVOICES COMPONENT */}
          <Route path="/admin/invoices" element={<Invoices />}>
            <Route index element={<InvoicesTable />} />
            <Route path=":invoiceYear" element={<InvoicesTable />} />
          </Route>

          {/* FEES COMPONENTS */}
          <Route path="/admin/fees" element={<Fees />}>
            <Route index element={<AddFeeTypeForm />} />
            <Route path=":feeTypeID" element={<EditFeeTypeForm />} />
          </Route>

          <Route path="/admin/reports" element={<Reports />}></Route>

          {/* USERS COMPONENTS */}
          <Route path="/admin/users" element={<Users />}>
            <Route path="allusers" element={<UserList/>}>
              <Route path=":userType" element={<UserListTable />} />
            </Route>
            <Route index element={<Navigate to="/admin/users/allusers/allusers"/>} />
            <Route path="adduser" element={<AddUserForm />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
