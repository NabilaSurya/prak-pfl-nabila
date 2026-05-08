import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="bg-red-100 p-6 rounded-full text-red-500 mb-4">
                <FaExclamationTriangle size={50} />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">404</h1>
            <p className="text-gray-500 mb-6 font-medium">
                Oops! Halaman yang kamu cari tidak ditemukan.
            </p>
            <Link 
                to="/" 
                className="bg-[#10b981] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-600 transition"
            >
                Kembali ke Dashboard
            </Link>
        </div>
    );
}