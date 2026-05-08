import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaShoppingCart,
    FaUsers,
    FaList,
    FaPlus,
    FaExclamationTriangle, // Tambahkan ini
    FaLock,                // Tambahkan ini
    FaBan                  // Tambahkan ini
} from "react-icons/fa";

export default function Sidebar() {
    const menus = [
        { name: "Dashboard", icon: FaHome, path: "/" },
        { name: "Orders", icon: FaShoppingCart, path: "/orders" },
        { name: "Customers", icon: FaUsers, path: "/customers" },
        { name: "Error 400", icon: FaExclamationTriangle, path: "/400" },
        { name: "Error 401", icon: FaLock, path: "/401" },
        { name: "Error 403", icon: FaBan, path: "/403" },
    ];

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all duration-200 ${
            isActive
                ? "text-[#10b981] bg-green-200 font-extrabold" 
                : "text-gray-600 hover:text-[#10b981] hover:bg-green-200 hover:font-extrabold"
        }`;

    return (
        <div className="flex h-screen w-[280px] flex-col bg-white border-r border-gray-100 p-6 shrink-0">
            <div className="mb-10 px-4">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Sedap<span className="text-[#10b981]">.</span>
                </h1>
                <p className="text-[10px] text-gray-400 font-medium">Modern Admin Dashboard</p>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto">
                {menus.map((menu) => (
                    <NavLink key={menu.name} to={menu.path} className={menuClass}>
                        <menu.icon className="text-xl" />
                        <span>{menu.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto bg-gray-900 rounded-3xl p-6 text-white shadow-xl">
                <p className="font-bold text-sm mb-1">Add new menu?</p>
                <p className="text-[11px] text-gray-400 mb-4">Click button below to start.</p>
                <button className="w-full flex items-center justify-center p-3 bg-[#10b981] hover:bg-green-600 rounded-xl font-bold text-sm transition">
                    <FaPlus className="mr-2" /> Add Now
                </button>
            </div>
        </div>
    );
}