import "./App.css";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

// Admin Components
import AdminNav from "./components/nav/AdminNav";
import AdminDashboard from "./components/adminuser/Dashboard/AdminDashboard";

// Invoices Components
import Invoices from "./components/adminuser/Invoices/Invoices";
import InvoicesTable from "./components/adminuser/Invoices/InvoicesTable";

import Fees from "./components/adminuser/Fees";
import Reports from "./components/adminuser/Reports";
import Students from "./components/adminuser/Students";
import Users from "./components/adminuser/Users";

function App() {
  return (
    <div className="App">
      <AdminNav />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/students" element={<Students />}></Route>
          <Route path="/admin/invoices" element={<Invoices />}>
            <Route index element={<InvoicesTable />} />
            <Route path=":invoiceYear" element={<InvoicesTable />} />
          </Route>
          <Route path="/admin/fees" element={<Fees />}></Route>
          <Route path="/admin/reports" element={<Reports />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
