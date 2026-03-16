import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="products" id="products">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
