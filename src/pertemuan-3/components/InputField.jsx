export default function InputField( { label, type, placeholder}) {
    return (
        <div className="mb-3 mt-4">
            <label className="block text-orange-300" font-medium mb-1>{label}</label>
            <input type={type}
            placeholder={placeholder}
            classname="w-full p-2 border border-white rounded"
             />
        </div>
    );
}