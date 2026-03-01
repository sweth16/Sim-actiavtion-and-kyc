import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./dashboard/AdminDashboard";
import CustomerDashboard from "./dashboard/CustomerDashboard";

import RequestSim from "./sim/RequestSim";
import ActivateSim from "./sim/ActivateSim";
import SimStatus from "./sim/SimStatus";

import UploadKyc from "./kyc/UploadKyc";
import VerifyKyc from "./kyc/VerifyKyc";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/activate-sim" element={<ActivateSim />} />
        <Route path="/verify-kyc" element={<VerifyKyc />} />

        {/* Customer */}
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/request-sim" element={<RequestSim />} />
        <Route path="/sim-status" element={<SimStatus />} />
        <Route path="/upload-kyc" element={<UploadKyc />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
