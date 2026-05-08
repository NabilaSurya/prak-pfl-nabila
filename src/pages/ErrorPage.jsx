import { Link } from "react-router-dom";

export default function ErrorPage({ code, title, description, image }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
            <img 
                src={image || `https://illustrations.popsy.co/gray/status-code-${code}.svg`} 
                alt="Error Illustration" 
                className="w-64 mb-8"
                onError={(e) => { e.target.src = "https://illustrations.popsy.co/gray/error.svg" }}
            />
            <h1 className="text-6xl font-black text-[#10b981] mb-2">{code}</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-500 mb-8 max-w-md">{description}</p>
            <Link to="/" className="bg-[#10b981] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-600 transition">
                Back to Dashboard
            </Link>
        </div>
    );
}