// Counter.jsx
import React from "react";
import PropTypes from "prop-types";

const Counter = ({ initialCount = 0, onCountChange }) => {
  const [count, setCount] = React.useState(initialCount);

  const handleIncrease = () => {
    setCount(count + 1);
    onCountChange(1);
  };

  const handleReduce = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(-1);
    }
  };

  return count > 0 ? (
    <div style={{ display: 'flex' }} className="add-cart-plus-minus">
      <button onClick={handleIncrease}>+</button>
      <h3>{count} </h3>
      <button onClick={handleReduce}>-</button>
    </div>
  ) : null;
};

Counter.propTypes = {
  initialCount: PropTypes.number,
  onCountChange: PropTypes.func,
};

export default Counter;
