import "./index.css";
import { ProductGrid, Product } from "./ProductGrid";
import productImage from "./assets/anime.webp";

function App() {
  const products: Product[] = [
    { id: 1, name: "Sword of Pasto", price: 49.99, image: productImage },
    { id: 2, name: "Dungeon Shield", price: 29.99, image: productImage },
    { id: 3, name: "Potion of Coffee", price: 9.99, image: productImage },
    { id: 4, name: "Cape of Shadows", price: 39.99, image: productImage },
    { id: 5, name: "Magic Boots", price: 19.99, image: productImage },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">🛒 PastoDungeon Store</h1>
      </header>

      <main>
        <ProductGrid title="🔥 Featured Items" products={products} />
        <ProductGrid title="✨ New Arrivals" products={products} />
      </main>
    </div>
  );
}

export default App;
