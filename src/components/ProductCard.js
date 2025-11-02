"use client";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
        <button className="fav-btn"><Heart /></button>
      </div>
      <h3 className="card-title">{product.title}</h3>
      <p className="card-sub">Sign in or Create an account to see pricing</p>
    </article>
  );
};

export default ProductCard;
