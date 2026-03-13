import React, { useState } from 'react';

const categories = [
  "Semua", "Musik", "Game", "Live", "Masakan", 
  "Berita", "Sepak Bola", "Teknologi", "Baru diupload", 
  "Ditonton", "Untuk Anda", "Komedi", "Otomotif"
];

const Chips = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Inline Style untuk demo cepat, tapi disarankan pindah ke file CSS terpisah
  const containerStyle = {
    display: 'flex',
    gap: '12px',
    padding: '12px 16px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: '#0f0f0f', // Sesuaikan dengan background YouTube Dark
    position: 'sticky',
    top: '0',
    zIndex: '10',
    msOverflowStyle: 'none',  /* IE and Edge */
    scrollbarWidth: 'none',   /* Firefox */
  };

  return (
    <div className="chips-wrapper" style={{ position: 'relative' }}>
      <div className="chips-container" style={containerStyle}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`chip-item ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* CSS internal agar file ini mandiri (self-contained) */}
      <style>{`
        .chips-container::-webkit-scrollbar {
          display: none; /* Sembunyikan scrollbar Chrome/Safari */
        }
        
        .chip-item {
          background-color: #272727;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          flex-shrink: 0;
        }

        .chip-item:hover {
          background-color: #3f3f3f;
        }

        .chip-item.active {
          background-color: #ffffff;
          color: #0f0f0f;
        }
      `}</style>
    </div>
  );
};

export default Chips;