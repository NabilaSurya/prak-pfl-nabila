import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const orderData = [
    { id: "ORD-001", customer: "Nabila Surya", status: "Completed", total: "Rp 120.000", date: "2026-05-01" },
    { id: "ORD-002", customer: "Fikri Ramadhan", status: "Pending", total: "Rp 85.000", date: "2026-05-02" },
    { id: "ORD-003", customer: "Budi Santoso", status: "Cancelled", total: "Rp 65.000", date: "2026-05-03" },
    { id: "ORD-004", customer: "Siti Aminah", status: "Completed", total: "Rp 150.000", date: "2026-05-04" },
    { id: "ORD-005", customer: "Andi Wijaya", status: "Pending", total: "Rp 95.000", date: "2026-05-05" },
    { id: "ORD-006", customer: "Putri Maharani", status: "Completed", total: "Rp 175.000", date: "2026-05-06" },
    { id: "ORD-007", customer: "Rizky Pratama", status: "Pending", total: "Rp 88.000", date: "2026-05-07" },
    { id: "ORD-008", customer: "Dewi Sartika", status: "Cancelled", total: "Rp 70.000", date: "2026-05-08" },
    { id: "ORD-009", customer: "Yoga Saputra", status: "Completed", total: "Rp 132.000", date: "2026-05-09" },
    { id: "ORD-010", customer: "Rahmawati", status: "Pending", total: "Rp 115.000", date: "2026-05-10" },
    { id: "ORD-011", customer: "Agus Salim", status: "Completed", total: "Rp 140.000", date: "2026-05-11" },
    { id: "ORD-012", customer: "Linda Sari", status: "Cancelled", total: "Rp 90.000", date: "2026-05-12" },
    { id: "ORD-013", customer: "Farhan Akbar", status: "Completed", total: "Rp 210.000", date: "2026-05-13" },
    { id: "ORD-014", customer: "Nur Aisyah", status: "Pending", total: "Rp 100.000", date: "2026-05-14" },
    { id: "ORD-015", customer: "Rina Melati", status: "Completed", total: "Rp 185.000", date: "2026-05-15" },
    { id: "ORD-016", customer: "Bambang Setiawan", status: "Cancelled", total: "Rp 77.000", date: "2026-05-16" },
    { id: "ORD-017", customer: "Maya Putri", status: "Completed", total: "Rp 160.000", date: "2026-05-17" },
    { id: "ORD-018", customer: "Dimas Saputra", status: "Pending", total: "Rp 99.000", date: "2026-05-18" },
    { id: "ORD-019", customer: "Citra Lestari", status: "Completed", total: "Rp 250.000", date: "2026-05-19" },
    { id: "ORD-020", customer: "Aldi Pranata", status: "Cancelled", total: "Rp 60.000", date: "2026-05-20" },
    { id: "ORD-021", customer: "Vina Oktavia", status: "Completed", total: "Rp 135.000", date: "2026-05-21" },
    { id: "ORD-022", customer: "Rudi Hartono", status: "Pending", total: "Rp 145.000", date: "2026-05-22" },
    { id: "ORD-023", customer: "Nina Karlina", status: "Completed", total: "Rp 220.000", date: "2026-05-23" },
    { id: "ORD-024", customer: "Yusuf Maulana", status: "Cancelled", total: "Rp 55.000", date: "2026-05-24" },
    { id: "ORD-025", customer: "Tasya Kamila", status: "Completed", total: "Rp 190.000", date: "2026-05-25" },
    { id: "ORD-026", customer: "Rafael Adrian", status: "Pending", total: "Rp 110.000", date: "2026-05-26" },
    { id: "ORD-027", customer: "Hani Putri", status: "Completed", total: "Rp 170.000", date: "2026-05-27" },
    { id: "ORD-028", customer: "Kevin Wijaya", status: "Cancelled", total: "Rp 80.000", date: "2026-05-28" },
    { id: "ORD-029", customer: "Sarah Olivia", status: "Completed", total: "Rp 260.000", date: "2026-05-29" },
    { id: "ORD-030", customer: "Fauzan Hidayat", status: "Pending", total: "Rp 125.000", date: "2026-05-30" },
];

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-4 relative">
            <PageHeader title="Orders" breadcrumb="Dashboard / Order List">
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-[#10b981] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2"
                >
                    <FaPlus size={14} /> Add Orders
                </button>
            </PageHeader>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 uppercase text-[11px] font-bold">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Order Date</th>
                            <th className="p-4 text-right">Total Price</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-50">
                        {orderData.map((order) => (
                            <tr key={order.id}>
                                <td className="p-4 font-bold">{order.id}</td>
                                <td className="p-4">{order.customer}</td>
                                <td className="p-4">{order.status}</td>
                                <td className="p-4">{order.date}</td>
                                <td className="p-4 text-right font-bold">{order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}