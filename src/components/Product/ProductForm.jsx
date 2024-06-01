import React, { useState, useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const ProductForm = () => {
  const [name, setName] = useState("");
  const { addProduct } = useContext(ProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name,
    };
    addProduct(newProduct);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Produto"
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
