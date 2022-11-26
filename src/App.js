import { useState, useEffect } from "react";
import ProductCard from "./productCard";
import { supabase } from "./supabaseClient";

// !! Create User Interface
// !! Create Supabase entegtation
// !! Implement CRUD operatio

// === Product Card ===

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className=" m-10 gap-5 flex flex-col w-52">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="Enter your name"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        placeholder="Enter your name"
      />
      <button>Submit</button>

      <div>
        {products.map((products, index) => (
          <ProductCard key={index} products={products} />
        ))}
      </div>
    </div>
  );
}

export default App;
