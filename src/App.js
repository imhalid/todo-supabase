import { useState } from "react";
import ProductCard from "./productCard";

// !! Create User Interface
// !! Create Supabase entegtation
// !! Implement CRUD operatio

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
