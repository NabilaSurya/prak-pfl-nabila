import { Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

//import Dashboard from "./pages/Dashboard";
//import Orders from "./pages/Orders"; 
//import Login from "./pages/auth/login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
//import AuthLayout from "./layouts/AuthLayout";
//import Customers from "./pages/Customers";
//import ErrorPage from "./pages/ErrorPage"; 
//import MainLayout from "./layouts/MainLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Login = React.lazy(() => import("./pages/auth/login"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Customers = React.lazy(() => import("./pages/Customers"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))

export default function App() {
    return (
        <Suspense fallback={<Loading />}> 
        <Routes>
                        <Route element={<MainLayout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/customers" element={<Customers />} />
                       
                        {/* Route Simulasi Error */}
                        <Route path="/400" element={<ErrorPage code="400" title="Bad Request" description="Permintaan tidak valid." />} />
                        <Route path="/401" element={<ErrorPage code="401" title="Unauthorized" description="Silakan login terlebih dahulu." />} />
                        <Route path="/403" element={<ErrorPage code="403" title="Forbidden" description="Akses halaman ini dilarang." />} />
                        
                        <Route path="*" element={<ErrorPage code="404" title="Not Found" description="Halaman tidak ditemukan." />} />
                        </Route>

                        <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/forgot" element={<Forgot/>} />
                        </Route>

        </Routes>
                    
        </Suspense>
                    
    );
}