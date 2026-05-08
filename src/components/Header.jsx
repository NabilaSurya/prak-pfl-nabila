import { useState } from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="flex items-center justify-between bg-white p-6 shadow-sm rounded-2xl mx-4 mt-4">
            
            {/* Search Bar dengan Dropdown Interaktif */}
            <div className="relative w-full max-w-lg">
                <input 
                    onFocus={() => setIsSearchOpen(true)}
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                    type="text" 
                    placeholder="Search menu or orders..." 
                    className="border border-gray-100 p-3 pl-10 bg-gray-50 w-full rounded-xl outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <FaSearch className="absolute left-4 top-4 text-gray-400" />
                
                {/* Dropdown Hasil Pencarian */}
                {isSearchOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-100 shadow-2xl rounded-xl p-4 z-50">
                        <p className="text-xs text-gray-400 uppercase font-bold mb-2">Popular Searches</p>
                        <div className="space-y-2">
                            {['Nasi Goreng', 'Sate Ayam', 'Bakso'].map((item) => (
                                <div key={item} className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer text-sm font-medium">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Icons & Profile */}
            <div className="flex items-center space-x-6">
                <div className="relative p-3 bg-blue-50 rounded-2xl text-blue-500 cursor-pointer hover:bg-blue-100 transition">
                    <FaBell />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-2xl cursor-pointer hover:bg-blue-100 transition"><FcAreaChart /></div>
                <div className="p-3 bg-red-50 rounded-2xl text-red-500 cursor-pointer hover:bg-red-100 transition"><SlSettings /></div>

                <div className="flex items-center space-x-4 border-l pl-6 border-gray-100">
                    <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">Nabila Surya</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Administrator</p>
                    </div>
                    {/* Avatar Cewek */}
                    <img 
                        src="/img/profil.jpg" 
                        className="w-12 h-12 rounded-full border-2 border-green-400 p-0.5" 
                        alt="Nabila Surya"
                    />
                </div>
            </div>
        </div>
    );
}