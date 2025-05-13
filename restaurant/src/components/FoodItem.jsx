// import "./FoodItem.css"

// const FoodItem = ({ item, addToCart }) => {
//   return (
//     <div className="food-item" onClick={() => addToCart(item)}>
//       <img src={item.image || "/placeholder.svg"} alt={item.name} className="food-image" />
//       <h3 className="food-name">{item.name}</h3>
//       <p className="food-price">$ {item.price.toFixed(2)}</p>
//     </div>
//   )
// }

// export default FoodItem

import "./FoodItem.css";

const FoodItem = ({ item, addToCart }) => {
  return (
    <div className="FoodItems-item" onClick={() => addToCart(item)}>
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="FoodItems-image"
      />
      <h3 className="FoodItems-name">{item.name}</h3>
      <p className="FoodItems-price">$ {item.price.toFixed(2)}</p>
    </div>
  );
};

export default FoodItem;
