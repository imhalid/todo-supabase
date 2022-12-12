/* eslint-disable no-unused-vars */
import {useState} from "react";
import {supabase} from "./supabaseClient";

const ProductCard = (props) => {
  const product = props.products;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);

  const updateProduct = async () => {
    try {
      const {error} = await supabase
         .from("todos2")
         .update([{name, description}])
         .eq("id", product.id);
      if (error) return error;
      window.location.reload();
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const deleteProduct = async () => {
    try {
      const {error} = await supabase
         .from("todos2")
         .delete()
         .eq("id", product.id);
      if (error) return error;
      window.location.reload();
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
     <div className="first:mt-5 mb-2">
       {editing === false ? (
          <div className="flex justify-between">
            <div>

              <h1 className="">{product.name}</h1>
              <p className="text-slate-500 text-sm">{product.description}</p>
            </div>
            <div>
              <button className="p-2 cursor-pointer bg-blue-100 rounded-md" onClick={() => setEditing(true)}>✏️
              </button>
              <button className="p-2 ml-2 cursor-pointer bg-red-100 rounded-md" onClick={() => deleteProduct()}>🗑
              </button>
            </div>
          </div>
       ) : (
          <div className="flex justify-between">
            <div>

              <input
                 onChange={(e) => setName(e.target.value)}
                 defaultValue={product.name}
                 type="text"
                 name="name"
                 min={4}
                 className="border rounded-md mb-2 p-2 w-[300px]"
                 placeholder="Enter your name"
              />
              <input
                 onChange={(e) => setDescription(e.target.value)}
                 defaultValue={product.description}
                 type="text"
                 name="description"
                 min={4}
                 className="border rounded-md p-2 w-[300px]"
                 placeholder="Enter your name"
              />
            </div>
            <div className="flex">

              <button className="p-2 cursor-pointer bg-blue-100 rounded-md" onClick={() => updateProduct()}>✅
              </button>
              <button className="p-2 ml-2 cursor-pointer bg-red-100 rounded-md" onClick={() => setEditing(false)}>❌
              </button>
            </div>
          </div>
       )}
     </div>
  );
};

export default ProductCard;
