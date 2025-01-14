import React, { useState, useEffect } from "react";
import { Search, Star, StarOff, Copy, BookmarkCheck } from "lucide-react";
import memesData from "./memes.json";
import storage from "./storage";
import { LazyImage } from "./components/LazyImage";

interface Meme {
  name: string;
  link: string;
}

function App() {
  const [memes] = useState<Meme[]>(memesData);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    // Load favorites using the storage wrapper
    storage.get("favorites").then((result) => {
      if (result.favorites) {
        setFavorites(result.favorites);
      }
    });
  }, []);

  const toggleFavorite = (memeName: string) => {
    const newFavorites = favorites.includes(memeName)
      ? favorites.filter((name) => name !== memeName)
      : [...favorites, memeName];

    setFavorites(newFavorites);

    // Save favorites using the storage wrapper
    storage.set({ favorites: newFavorites });
  };

  const copyToClipboard = (url: string, name: string) => {
    const markdownImage = `![${name}](${url})`;
    navigator.clipboard
      .writeText(markdownImage)
      .catch((err) => console.error("Failed to copy:", err));
  };

  const filteredMemes = memes.filter((meme) => {
    const matchesSearch = meme.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return showOnlyFavorites
      ? matchesSearch && favorites.includes(meme.name)
      : matchesSearch;
  });

  return (
    <div className="w-[400px] h-[600px] bg-gray-50 p-4">
      <div className="mb-4">
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search memes..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`px-3 py-2 rounded-lg border transition-colors ${
              showOnlyFavorites
                ? "bg-yellow-50 border-yellow-200 text-yellow-600"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
            title={showOnlyFavorites ? "Show all memes" : "Show only favorites"}
          >
            <BookmarkCheck className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[calc(100%-60px)]">
        {filteredMemes.map((meme) => (
          <div
            key={meme.name}
            className="relative group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <LazyImage
              src={meme.link}
              alt={meme.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600 truncate">{meme.name}</p>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => toggleFavorite(meme.name)}
                  className="text-gray-500 hover:text-yellow-500"
                >
                  {favorites.includes(meme.name) ? (
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ) : (
                    <StarOff className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => copyToClipboard(meme.link, meme.name)}
                  className="text-gray-500 hover:text-blue-500"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
