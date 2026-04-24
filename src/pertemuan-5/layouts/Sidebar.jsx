import { useState } from "react";
import { FaHome, FaShoppingCart, FaUsers, FaList, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const menus = [
        { name: "Dashboard", icon: FaHome },
        { name: "Orders", icon: FaShoppingCart },
        { name: "Customers", icon: FaUsers },
        { name: "Menu List", icon: FaList },
    ];

    return (
        <div className="flex h-screen w-[280px] flex-col bg-white border-r border-gray-100 p-6 transition-all duration-300">
            {/* Logo Area */}
            <div className="mb-10 px-4">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Sedap<span className="text-hijau">.</span>
                </h1>
            </div>

            {/* Navigasi */}
            <nav className="flex-1 space-y-2">
                {menus.map((menu) => (
                    <button
                        key={menu.name}
                        onClick={() => setActiveMenu(menu.name)}
                        className={`group flex w-full items-center p-4 rounded-xl font-bold transition-all duration-200 ${
                            activeMenu === menu.name
                                ? "bg-hijau text-white shadow-lg shadow-green-200"
                                : "text-gray-400 hover:bg-gray-50 hover:text-gray-800"
                        }`}
                    >
                        <menu.icon className={`mr-4 text-xl ${activeMenu === menu.name ? "text-white" : "text-gray-400 group-hover:text-gray-800"}`} />
                        {menu.name}
                    </button>
                ))}
            </nav>

            {/* Action Card (Footer) */}
            <div className="mt-auto bg-gray-900 rounded-3xl p-6 text-white shadow-xl">
                <p className="font-bold text-sm mb-1">Add new menu?</p>
                <p className="text-[11px] text-gray-400 mb-4">Click button below to start.</p>
                <button className="w-full flex items-center justify-center p-3 bg-hijau hover:bg-green-600 rounded-xl font-bold text-sm transition">
                    <FaPlus className="mr-2" /> Add Now
                </button>
            </div>
        </div>
    );
}