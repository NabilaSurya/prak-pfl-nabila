import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUser } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";

const data = [
    { name: 'Jan', revenue: 4000 }, { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 }, { name: 'Apr', revenue: 7000 },
    { name: 'May', revenue: 6000 }, { name: 'Jun', revenue: 9000 },
];

const recentOrders = [
    { id: 1, name: "Fikri Muhaffizh", menu: "Nasi Goreng Spesial", status: "Completed", amount: "Rp. 25.000", color: "text-hijau" },
    { id: 2, name: "Budi Santoso", menu: "Sate Ayam Madura", status: "Processing", amount: "Rp. 35.000", color: "text-blue-500" },
    { id: 3, name: "Siti Aminah", menu: "Bakso Urat", status: "Completed", amount: "Rp. 20.000", color: "text-hijau" },
    { id: 4, name: "Andi Wijaya", menu: "Es Teh Manis", status: "Canceled", amount: "Rp. 5.000", color: "text-red-500" },
    { id: 5, name: "Putri Sari", menu: "Mie Goreng", status: "Completed", amount: "Rp. 22.000", color: "text-hijau" },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <PageHeader />

            {/* Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Orders", val: "75", color: "bg-hijau", icon: FaShoppingCart },
                    { label: "Delivered", val: "175", color: "bg-blue-500", icon: FaTruck },
                    { label: "Canceled", val: "40", color: "bg-red-500", icon: FaBan },
                    { label: "Total Revenue", val: "Rp.128k", color: "bg-yellow-500", icon: FaDollarSign },
                ].map((s, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-lg transition">
                        <div className={`${s.color} p-4 rounded-xl text-white`}><s.icon size={20}/></div>
                        <div><p className="text-xl font-bold">{s.val}</p><p className="text-gray-400 text-xs">{s.label}</p></div>
                    </div>
                ))}
            </div>

            {/* Grafik & Tabel Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Grafik */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold mb-4">Revenue Trends</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00B074" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#00B074" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#00B074" fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabel Order Terbaru */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Recent Orders</h3>
                        <FaUser className="text-gray-400"/>
                    </div>
                    <div className="space-y-4">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="flex justify-between items-center border-b pb-3 last:border-0">
                                <div>
                                    <p className="font-bold text-sm">{order.name}</p>
                                    <p className="text-[10px] text-gray-400">{order.menu}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`text-xs font-bold ${order.color}`}>{order.status}</p>
                                    <p className="text-xs font-semibold">{order.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}