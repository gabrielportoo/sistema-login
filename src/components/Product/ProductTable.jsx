import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const ProductTable = () => {
  const { products, removeProduct } = useContext(ProductContext);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <button onClick={() => removeProduct(product.id)}>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
