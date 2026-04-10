import React from 'react';

export default function TailwindPremiumShowcase() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 pb-20 overflow-x-hidden">
      <FlexboxGrid />

      {/* --- HERO SECTION --- */}
      <header className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
        {/* Background Accents */}
        <div className="absolute top-0 -right-20 w-80 h-80 bg-orange-200 rounded-full blur-[120px] opacity-40 -z-10"></div>
        
        <div className="flex flex-col items-center text-center">
          
          {/* BAGIAN: BELAJAR TAILWIND CSS (Interaktif & Elegan) */}
          <div className="group relative inline-block cursor-default">
            {/* Glow effect di belakang teks saat hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-900 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white border border-slate-100 px-8 py-4 rounded-2xl shadow-sm flex items-center gap-4 transition-all duration-500 group-hover:scale-105 group-hover:border-orange-200">
               <div className="flex -space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-950"></div>
               </div>
               <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-blue-950">
                  Belajar <span className="text-orange-500">Tailwind CSS</span>
               </h1>
               <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                 Interactive Mode
               </div>
            </div>
          </div>
          
          <p className="mt-8 text-slate-500 text-xl max-w-lg leading-relaxed font-medium">
            Kuasai seni membangun antarmuka web yang <span className="text-blue-950 font-bold italic">stunning</span> dan responsif.
          </p>

          {/* BAGIAN: BUTTON CLICK ME (Ultra Elegan & Interaktif) */}
          <div className="mt-12 relative group">
            {/* Bayangan tombol yang ikut bergerak */}
            <div className="absolute inset-0 bg-blue-950 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"></div>
            
            <button className="relative bg-blue-950 overflow-hidden text-orange-300 px-12 py-5 rounded-2xl font-black text-xl tracking-wider shadow-2xl transition-all duration-300 active:scale-90 hover:-translate-y-2 flex items-center gap-3 border border-blue-800">
              {/* Efek kilatan cahaya (Shine effect) yang lewat saat hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
              
              <span className="relative z-10 uppercase">Click Me</span>
              
              {/* Icon panah yang muncul saat hover */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 transform transition-all duration-300 group-hover:translate-x-2" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            {/* Keterangan kecil di bawah tombol agar nampak 'well designed' */}
            <span className="block mt-4 text-[10px] font-bold text-slate-300 tracking-[0.3em] uppercase">Press to experience magic</span>
          </div>

        </div>
      </header>

      {/* Grid Materi Tetap Dibawah */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7"><Spacing /></div>
        <div className="md:col-span-5"><BorderRadius /></div>
        <div className="md:col-span-12"><Typography /></div>
        <div className="md:col-span-6"><BackgroundColors /></div>
        <div className="md:col-span-6"><ShadowEffects /></div>
      </main>
    </div>
  );
}

// Tambahkan CSS custom ini di file global CSS kamu atau di dalam tag <style> agar animasinya jalan
// .animate-shine { animation: shine 1.5s infinite; }
// @keyframes shine { 100% { left: 125%; } }

// --- KOMPONEN LAINNYA (Sama seperti sebelumnya) ---
function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl px-8 py-5 flex justify-between items-center border-b border-slate-100">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-950 rounded-xl flex items-center justify-center">
          <div className="w-4 h-4 bg-orange-400 rounded-sm rotate-45"></div>
        </div>
        <span className="text-blue-950 font-black text-2xl tracking-tighter">UI.LAB</span>
      </div>
      <button className="bg-blue-950 text-orange-300 px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-950/20">V.2026</button>
    </nav>
  );
}

function Spacing() {
    return (
      <div className="h-full bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-blue-950 tracking-tight">Spacing</h2>
          <span className="text-slate-300 font-mono font-bold text-4xl">01</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-blue-950 rounded-2xl flex items-center justify-center text-orange-300 font-bold italic">p-4</div>
          <div className="h-20 bg-orange-400 rounded-2xl flex items-center justify-center text-blue-950 font-bold italic">m-2</div>
          <div className="h-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 font-bold italic">gap-4</div>
        </div>
      </div>
    );
  }
  
  function BorderRadius() {
    return (
      <div className="h-full bg-orange-400 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden">
        <h2 className="text-3xl font-black text-blue-950 tracking-tight mb-4">Rounded</h2>
        <div className="space-y-4">
           <button className="w-full bg-blue-950 text-white py-4 rounded-xl font-bold shadow-lg">Small</button>
           <button className="w-full bg-blue-950 text-white py-4 rounded-full font-bold shadow-lg transform translate-x-4">Full</button>
        </div>
      </div>
    );
  }
  
  function Typography() {
    return (
      <div className="bg-blue-950 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h3 className="text-orange-400 font-bold tracking-[0.3em] text-sm mb-4 uppercase">Typography Study</h3>
             <h2 className="text-5xl font-serif font-black italic mb-6">"Tailwind CSS is fun."</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
             <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 text-xs font-bold uppercase">Size</span>
                <span className="text-orange-300 font-bold">text-5xl</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 text-xs font-bold uppercase">Font</span>
                <span className="text-orange-300 font-bold">Serif</span>
             </div>
          </div>
        </div>
      </div>
    );
  }
  
  function BackgroundColors() {
    return (
      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 overflow-hidden shadow-sm hover:shadow-2xl transition-all">
        <h3 className="text-3xl font-black text-blue-950 mb-6">Colors</h3>
        <div className="space-y-3">
          <div className="h-14 bg-blue-950 rounded-2xl flex items-center px-6 justify-between transition-transform">
             <span className="text-white font-bold text-sm tracking-widest uppercase">Deep Blue</span>
             <span className="text-orange-300 font-mono text-xs">#172554</span>
          </div>
          <div className="h-14 bg-orange-400 rounded-2xl flex items-center px-6 justify-between transition-transform">
             <span className="text-blue-950 font-bold text-sm tracking-widest uppercase">Orange</span>
             <span className="text-blue-900 font-mono text-xs">#FB923C</span>
          </div>
        </div>
      </div>
    );
  }
  
  function ShadowEffects() {
    return (
      <div className="h-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden">
        <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl mb-8 group-hover:shadow-[0_40px_60px_rgba(251,146,60,0.3)] transition-all duration-500 flex items-center justify-center hover">
           <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
        </div>
        <h3 className="text-3xl font-black text-blue-950 mb-4 tracking-tighter">Shadow Depth</h3>
        <p className="text-slate-500 font-medium">Hover to feel the depth.</p>
      </div>
    );
  }