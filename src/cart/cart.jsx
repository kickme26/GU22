import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./cart.module.css";
import Counter from "../counter/counter";

const productsData = [
  {
    name: "Fancy Product",
    price: "$14.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/718e6Wtg0fL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    name: "Product 2",
    price: "$15.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61bk+hb2xEL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    name: "Product 3",
    price: "$54.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/81TaMD78lHL._AC_UL480_QL65_.jpg",
  },
  {
    name: "Product 4",
    price: "$4.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/414oKzuZzuL._AC_UL480_FMwebp_QL65_.jpg",
  },
];

const Product = (props) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [count, setCount] = React.useState(1);
  
    const handleAddToCart = () => {
        setIsAdded(true);
        setCount(1); // Reset count to 1 when adding to cart
        props.onAddToCart();
      };
    
      const handleCountChange = (change) => {
        setCount(count + change);
        props.onCountChange(change); // Notify the parent about the count change
      };
    
      const handleCountZero = () => {
        setIsAdded(false);
      };
    
      return (
        <div className={styles['product-root']}>
          <img src={props.imageUrl} alt={props.name} className={styles['product-image']} />
          <h3>{props.name}</h3>
          <h4>{props.price}</h4>
          {!isAdded ? (
            <button className={styles['add-product']} onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <div>
              <Counter initialCount={count} onCountChange={handleCountChange} />
              {count == 0 && (
                <button className={styles['add-product']} onClick={handleAddToCart}>
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      );
    };

Product.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  onAddToCart: PropTypes.func,
  onCountChange: PropTypes.func,
  
};

const Products = () => {
    const [totalCount, setTotalCount] = React.useState(0);
  
    const handleAddToCart = () => {
      setTotalCount(totalCount + 1);
    };
  
    const handleCountChange = (change) => {
      setTotalCount(totalCount + change);
    };
  
    return (
      <div>
        <div className={styles['total-count']}>
          
          <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className={styles['cart-image']} />
          <h4>Cart {totalCount}</h4>
        </div>
        <div className={styles['products-root']}>
          {productsData.map((data) => (
            <Product
              key={data.name}
              {...data}
              onAddToCart={handleAddToCart}
              onCountChange={handleCountChange}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Products;