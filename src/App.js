import './App.css';
import Container from "@mui/material/Container";
import {Route, Routes} from "react-router-dom"

import Dashboard from "./components/adminuser/Dashboard"
import Fees from "./components/adminuser/Fees"
import Invoices from "./components/adminuser/Invoices"
import Reports from "./components/adminuser/Reports"
import Students from "./components/adminuser/Students"
import Users from "./components/adminuser/Students"
import AdminNav from './components/nav/AdminNav';

function App() {
  return (
    <div className="App">
      <AdminNav/>
      <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/admin/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin/students" element={<Students/>}></Route>
        <Route path="/admin/invoices" element={<Invoices/>}></Route>
        <Route path="/admin/fees" element={<Fees/>}></Route>
        <Route path="/admin/reports" element={<Reports/>}></Route>
        <Route path="/admin/users" element={<Users/>}></Route>
      </Routes>
      </Container>
    </div>
  );
}

export default App;