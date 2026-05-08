import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout(){
     return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <Outlet/>
            </div>
        </div>
    );
}