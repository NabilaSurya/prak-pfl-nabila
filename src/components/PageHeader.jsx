export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 border border-gray-50">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    <nav className="text-sm text-gray-400 mt-1">
                        {/* Menangani breadcrumb baik string maupun array */}
                        {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    {children} {/* Ini tempat tombol "Add Orders/Customer" muncul */}
                </div>
            </div>
        </div>
    );
}