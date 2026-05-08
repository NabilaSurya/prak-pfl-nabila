import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const customerData = [
    { id: "CUST-001", name: "Nabila Surya", email: "nabila@gmail.com", phone: "081234567890", loyalty: "Gold" },
    { id: "CUST-002", name: "Fikri Ramadhan", email: "fikri@gmail.com", phone: "081298765432", loyalty: "Silver" },
    { id: "CUST-003", name: "Budi Santoso", email: "budi@gmail.com", phone: "081277788899", loyalty: "Bronze" },
    { id: "CUST-004", name: "Siti Aminah", email: "siti@gmail.com", phone: "081212121212", loyalty: "Gold" },
    { id: "CUST-005", name: "Andi Wijaya", email: "andi@gmail.com", phone: "081343434343", loyalty: "Silver" },
    { id: "CUST-006", name: "Putri Maharani", email: "putri@gmail.com", phone: "081454545454", loyalty: "Bronze" },
    { id: "CUST-007", name: "Rizky Pratama", email: "rizky@gmail.com", phone: "081565656565", loyalty: "Gold" },
    { id: "CUST-008", name: "Dewi Sartika", email: "dewi@gmail.com", phone: "081676767676", loyalty: "Silver" },
    { id: "CUST-009", name: "Yoga Saputra", email: "yoga@gmail.com", phone: "081787878787", loyalty: "Bronze" },
    { id: "CUST-010", name: "Rahmawati", email: "rahma@gmail.com", phone: "081898989898", loyalty: "Gold" },
    { id: "CUST-011", name: "Agus Salim", email: "agus@gmail.com", phone: "081909090909", loyalty: "Silver" },
    { id: "CUST-012", name: "Linda Sari", email: "linda@gmail.com", phone: "081111111111", loyalty: "Bronze" },
    { id: "CUST-013", name: "Farhan Akbar", email: "farhan@gmail.com", phone: "082222222222", loyalty: "Gold" },
    { id: "CUST-014", name: "Nur Aisyah", email: "nur@gmail.com", phone: "083333333333", loyalty: "Silver" },
    { id: "CUST-015", name: "Rina Melati", email: "rina@gmail.com", phone: "084444444444", loyalty: "Bronze" },
    { id: "CUST-016", name: "Bambang Setiawan", email: "bambang@gmail.com", phone: "085555555555", loyalty: "Gold" },
    { id: "CUST-017", name: "Maya Putri", email: "maya@gmail.com", phone: "086666666666", loyalty: "Silver" },
    { id: "CUST-018", name: "Dimas Saputra", email: "dimas@gmail.com", phone: "087777777777", loyalty: "Bronze" },
    { id: "CUST-019", name: "Citra Lestari", email: "citra@gmail.com", phone: "088888888888", loyalty: "Gold" },
    { id: "CUST-020", name: "Aldi Pranata", email: "aldi@gmail.com", phone: "089999999999", loyalty: "Silver" },
    { id: "CUST-021", name: "Vina Oktavia", email: "vina@gmail.com", phone: "081010101010", loyalty: "Bronze" },
    { id: "CUST-022", name: "Rudi Hartono", email: "rudi@gmail.com", phone: "081020202020", loyalty: "Gold" },
    { id: "CUST-023", name: "Nina Karlina", email: "nina@gmail.com", phone: "081030303030", loyalty: "Silver" },
    { id: "CUST-024", name: "Yusuf Maulana", email: "yusuf@gmail.com", phone: "081040404040", loyalty: "Bronze" },
    { id: "CUST-025", name: "Tasya Kamila", email: "tasya@gmail.com", phone: "081050505050", loyalty: "Gold" },
    { id: "CUST-026", name: "Rafael Adrian", email: "rafael@gmail.com", phone: "081060606060", loyalty: "Silver" },
    { id: "CUST-027", name: "Hani Putri", email: "hani@gmail.com", phone: "081070707070", loyalty: "Bronze" },
    { id: "CUST-028", name: "Kevin Wijaya", email: "kevin@gmail.com", phone: "081080808080", loyalty: "Gold" },
    { id: "CUST-029", name: "Sarah Olivia", email: "sarah@gmail.com", phone: "081090909090", loyalty: "Silver" },
    { id: "CUST-030", name: "Fauzan Hidayat", email: "fauzan@gmail.com", phone: "081121212121", loyalty: "Bronze" },
];

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-4">
            <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
                <button className="bg-[#10b981] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
                    <FaPlus size={14} /> Add Customer
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customerData.map((cust) => (
                    <div
                        key={cust.id}
                        className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-[#10b981]">
                                {cust.name.charAt(0)}
                            </div>

                            <span className="text-xs font-bold text-gray-500">
                                {cust.loyalty}
                            </span>
                        </div>

                        <h3 className="font-bold text-gray-800">{cust.name}</h3>
                        <p className="text-sm text-gray-400">{cust.email}</p>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <span className="text-gray-400 text-sm">Phone</span>
                            <span className="font-bold text-sm">{cust.phone}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}