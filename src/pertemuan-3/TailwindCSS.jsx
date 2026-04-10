export default function TailwindCSS(){
    return(
        <>
        <FlexboxGrid/>
        <div>
            <h1 class="border-2 mr-4 border-orage-300 text-orange-300 px-4 py-2 rounded-lg ml-4 mt-4 bg-blue-950">Belajar Tailwind CSS</h1>
            <button className="bg-blue-950 text-orange-300 px-4 py-5 mx-4 rounded-3xl shadow-lg mt-4">
                click me
            </button>
        </div>
        
        <Spacing/>
        <Typography/>
        <BorderRadius/>
        <BackgroundColors/>
        <ShadowEffects/>
        </>
       
    )
}

function Spacing(){
    return (
        <div className="bg-blue-950 shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold text-white">Card Title</h2>
            <p className="mt-2 text-orange-300">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="m-4">
            <h1 className="text-2xl font-serif font-bold text-blue-950">Tailwind Typography</h1>
            <p className="text-orange-300 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-orange-300 text-orange-300 px-4 py-2 rounded-lg ml-4 bg-blue-950"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="m-4 bg-blue-950 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-serif">Tailwind Colors</h3>
            <p className="mt-2 text-orange-300">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}
function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-blue-950 p-4 text-orange-300">
            <h1 className="text-lg font-bold text-orange-300">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="ml-4 mr-4 bg-blue-950 shadow-lg p-6 hover:rotate-2 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl text-orange-300 not-[]:font-sans">Hover me!</h3>
            <p className="text-orange-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}