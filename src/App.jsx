import ProductCard from "./productCard";
import {useEffect, useState} from "react";
import {supabase} from "./supabaseClient";


// !! Create User Interface
// !! Create Supabase integration
// !! Implement CRUD operation

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
      const {data, error} = await supabase
         .from("todos2")
         .select("*")
         .limit(10);
      if (error) return error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const createProduct = async () => {
    try {
      const {error} = await supabase
         .from("todos2")
         .insert([{name, description}])
         .single();
      if (error) return error;
      window.location.reload();
    } catch (error) {
      console.log("error", error.message);

    }
  };

  return (
     <div className="w-full h-screen items-center px-4 flex justify-center">
       <div className="w-[450px] bg-white min-h-[400px] border rounded-2xl p-5">
         <form className="flex flex-row space-x-2 justify-between">
           <div className="flex space-y-2 flex-col">
             <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="border rounded-md p-2 w-[300px]"
                placeholder="Enter your name"
             />
             <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                className="border rounded-md p-2 w-[300px]"
                placeholder="Enter your name"
             />
           </div>
           <button onClick={() => createProduct()}
                   className="w-full cursor-pointer text-4xl bg-emerald-100 rounded-md">👌🏻
           </button>
         </form>


         <div>
           {products.map((products, index) => (
              <ProductCard key={index} products={products}/>
           ))}
         </div>
       </div>
     </div>
  );
}

export default App;
