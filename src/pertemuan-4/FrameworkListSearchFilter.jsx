import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Explore <span className="text-blue-600">Frameworks</span>
        </h1>
        <p className="text-slate-500">
          Koleksi teknologi terbaik untuk membangun masa depan.
        </p>
      </div>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
        <option value="">All Tags</option>
      </select>
      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-2 overflow-hidden"
          >
            {/* Dekorasi Background (Efek Blur saat Hover) */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full transition-all group-hover:bg-blue-100 group-hover:scale-150 duration-500 opacity-50" />

            <div className="relative z-10">
              {/* Badge Tahun */}
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
                Est. {item.details.releaseYear}
              </span>

              {/* Title & Developer */}
              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h2>
              <p className="text-sm text-slate-400 mb-4 font-medium">
                by {item.details.developer}
              </p>

              {/* Deskripsi */}
              <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                {item.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-600 px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold text-sm transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95"
              >
                Visit Official Site
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
