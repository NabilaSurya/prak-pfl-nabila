import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders"; 
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage"; // Pastikan file ini ada
import "./assets/tailwind.css";

export default function App() {
    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="p-4 flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/customers" element={<Customers />} />
                        
                        {/* Route Simulasi Error */}
                        <Route path="/400" element={<ErrorPage code="400" title="Bad Request" description="Permintaan tidak valid." />} />
                        <Route path="/401" element={<ErrorPage code="401" title="Unauthorized" description="Silakan login terlebih dahulu." />} />
                        <Route path="/403" element={<ErrorPage code="403" title="Forbidden" description="Akses halaman ini dilarang." />} />
                        
                        <Route path="*" element={<ErrorPage code="404" title="Not Found" description="Halaman tidak ditemukan." />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}