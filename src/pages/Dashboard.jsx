import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUser } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";

const data = [
    { name: 'Jan', revenue: 4000 }, { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 }, { name: 'Apr', revenue: 7000 },
    { name: 'May', revenue: 6000 }, { name: 'Jun', revenue: 9000 },
];

const recentOrders = [
    { id: 1, name: "Fikri Muhaffizh", menu: "Nasi Goreng Spesial", status: "Completed", amount: "Rp. 25.000", color: "text-emerald-500" },
    { id: 2, name: "Budi Santoso", menu: "Sate Ayam Madura", status: "Processing", amount: "Rp. 35.000", color: "text-blue-500" },
    { id: 3, name: "Siti Aminah", menu: "Bakso Urat", status: "Completed", amount: "Rp. 20.000", color: "text-emerald-500" },
    { id: 4, name: "Andi Wijaya", menu: "Es Teh Manis", status: "Canceled", amount: "Rp. 5.000", color: "text-red-500" },
    { id: 5, name: "Putri Sari", menu: "Mie Goreng", status: "Completed", amount: "Rp. 22.000", color: "text-emerald-500" },
];

export default function Dashboard() {
    return (
        <div className="space-y-6 p-6 bg-[#f8f9fa] min-h-screen">
            {/* Header Area */}
            <div className="mb-2">
                <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Dashboard</h1>
                <nav className="text-sm text-gray-400 mt-1">
                    Home / Home Detail / Home Very Detail
                </nav>
            </div>

            {/* Statistik / Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Orders", val: "75", color: "bg-[#10b981]", icon: FaShoppingCart },
                    { label: "Total Delivered", val: "175", color: "bg-[#3b82f6]", icon: FaTruck },
                    { label: "Total Canceled", val: "40", color: "bg-[#ef4444]", icon: FaBan },
                    { label: "Total Revenue", val: "Rp. 128", color: "bg-[#f59e0b]", icon: FaDollarSign },
                ].map((s, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-50 flex items-center space-x-4">
                        {/* Bulatan Ikon */}
                        <div className={`${s.color} w-12 h-12 flex items-center justify-center rounded-full text-white shrink-0`}>
                            <s.icon size={20}/>
                        </div>
                        {/* Teks Angka & Label */}
                        <div className="flex flex-col">
                            <span className="text-lg font-extrabold text-gray-800 leading-none">{s.val}</span>
                            <span className="text-gray-400 text-[10px] uppercase font-semibold mt-1">{s.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Grafik & Tabel Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Grafik */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                    <h3 className="font-bold text-gray-700 mb-6">Revenue Trends</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabel Order Terbaru */}
                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-700">Recent Orders</h3>
                        <FaUser className="text-gray-300"/>
                    </div>
                    <div className="space-y-5">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0">
                                <div>
                                    <p className="font-bold text-sm text-gray-800">{order.name}</p>
                                    <p className="text-[10px] text-gray-400 font-medium">{order.menu}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-[10px] font-bold uppercase ${order.color}`}>{order.status}</p>
                                    <p className="text-xs font-bold text-gray-700">{order.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}