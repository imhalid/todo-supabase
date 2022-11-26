/* eslint-disable no-unused-vars */
import { useState } from "react";
import { supabase } from "./supabaseClient";

const ProductCard = (props) => {
  const product = props.products;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);

  const updateProduct = async () => {
    try {
      const { error } = await supabase
        .from("todos2")
        .update([{ name, description }])
        .eq("id", product.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const deleteProduct = async () => {
    try {
      const { error } = await supabase
        .from("todos2")
        .delete()
        .eq("id", product.id);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className="w-40 flex-col items-start gap-5 flex">
      {editing === false ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct()}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          <h4>Editing</h4>
          <input
            onChange={(e) => setName(e.target.value)}
            defaultValue={product.name}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={product.description}
            type="text"
            name="description"
            placeholder="Enter your name"
          />
          <button onClick={() => updateProduct()}>Submit</button>
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
