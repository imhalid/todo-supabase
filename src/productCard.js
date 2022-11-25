import { useState } from "react";

const ProductCard = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-40 flex-col items-start gap-5 flex">
      {editing === false ? (
        <>
          <h1>Product Name</h1>
          <p>Product Description</p>
          <button>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          <h4>Editing</h4>
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
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
