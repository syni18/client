import React, { useCallback } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import useCartStore from "../../redux/store/cartStore";



function ProductCard({item}) {
  const { addToCart } = useCartStore();

  const handleAddToCart = useCallback(
    async (item) => {      
      console.log("watchlist :", item);
      
      addToCart(item);
      const data = {
        productId: item._id,
        title: item.title,
        price: item.price,
        quantity: 1,
        thumbnail: item.thumbnail,
        category: item.category,
        description: item.description,
      }
      const cartItems = await addProductToCart(data);
    },
    [addToCart]
  );
  
  return (
    <div className="productcard-wrapper">
        <Link to={`/item/${item._id}`}>
          <div className="product">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">Rs {item.price}</p>
            </div>
          </div>
        </Link>
      <a href="" className="body-buy-btn">
        Buy Now
      </a>
      <a href="#" className="body-cart-btn" onClick={handleAddToCart}>
        {/* Add to Cart */}
      </a>
    </div>
  );
}

export default ProductCard;
