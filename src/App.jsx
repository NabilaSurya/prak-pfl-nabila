import React from 'react';
import './App.css';

// Data Dummy untuk Video
const videos = [
  { id: 1, title: "Belajar React untuk Pemula", channel: "Tech Indo", views: "100K", time: "2 jam lalu", thumb: "https://picsum.photos/seed/1/300/180" },
  { id: 2, title: "Tips CSS Layouting Profesional", channel: "Design Kita", views: "50K", time: "5 jam lalu", thumb: "https://picsum.photos/seed/2/300/180" },
  { id: 3, title: "Membangun Karir Software Engineer", channel: "Karir Dev", views: "200K", time: "1 hari lalu", thumb: "https://picsum.photos/seed/3/300/180" },
  { id: 4, title: "Review Laptop Spek Dewa 2026", channel: "Gadget Pro", views: "1M", time: "3 hari lalu", thumb: "https://picsum.photos/seed/4/300/180" },
  { id: 5, title: "Makan Enak di Jakarta", channel: "Food Vibe", views: "80K", time: "4 hari lalu", thumb: "https://picsum.photos/seed/5/300/180" },
  { id: 6, title: "Tutorial Piano Lagu Populer", channel: "Music Lab", views: "12K", time: "6 hari lalu", thumb: "https://picsum.photos/seed/6/300/180" },
];

function App() {
  return (
    <div className="youtube-clone">
      {/* HEADER */}
      <header className="navbar">
        <div className="nav-left">
          <span className="menu-btn">☰</span>
          <div className="logo">
            <span className="logo-icon">▶</span>
            <span className="logo-text">YouTube</span>
          </div>
        </div>
        <div className="nav-center">
          <input type="text" placeholder="Telusuri" className="search-bar" />
          <button className="search-btn">🔍</button>
        </div>
        <div className="nav-right">
          <span className="nav-icon">📹</span>
          <span className="nav-icon">🔔</span>
          <div className="user-avatar">U</div>
        </div>
      </header>

      <div className="main-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-item active">🏠 Beranda</div>
          <div className="sidebar-item">🎬 Shorts</div>
          <div className="sidebar-item">📺 Subscription</div>
          <hr />
          <div className="sidebar-item">📚 Perpustakaan</div>
          <div className="sidebar-item">🕒 Riwayat</div>
        </aside>

        {/* CONTENT AREA */}
        <main className="content">
          <div className="categories">
            {["Semua", "Musik", "Game", "Live", "Masakan", "Baru diupload"].map(cat => (
              <button key={cat} className="cat-btn">{cat}</button>
            ))}
          </div>

          <div className="video-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card">
                <img src={video.thumb} alt="thumbnail" className="thumbnail" />
                <div className="video-info">
                  <div className="channel-img"></div>
                  <div className="text-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-meta">{video.channel}</p>
                    <p className="video-meta">{video.views} x ditonton • {video.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;