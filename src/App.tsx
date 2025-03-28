import './index.css'
import productImage from './assets/anime.webp';

function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600">🗡️ PastoDungeon Store</h1>
        <p className="text-gray-400 mt-2">Gear up before you descend...</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="product-card p-4 rounded-xl">
          <img
            src={productImage}
            alt="Product"
            className="rounded mb-4 border-2 border-gray-700"
          />
          <h2 className="text-lg font-semibold text-red-400">Cursed Anime T-Shirt</h2>
          <p className="text-gray-400">$19.99</p>
          <button className="mt-4 py-2 px-4 rounded w-full text-white">
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  )
}

export default App;
