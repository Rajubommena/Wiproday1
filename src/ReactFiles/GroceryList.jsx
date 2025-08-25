import React from "react";

const GroceryList = ({ items }) => {  //declareing a function GroceryList use object destructuring to accepts props
  const handleClick = () => {  //a declare function inside the component when the button is click it runs this function
  
    alert("Groceries Added to Cart!"); // alert shows a popup message "Groceries Added to Cart!".
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Grocery List</h2>
      <ul>
        {items.map((item, index) => (   //loops through the items of array passed through props,
          <li key={index} className="mb-1">  //needs a unique key for each list item to track single itams
            {item}    //dispaly items
          </li>
        ))}
      </ul>
      <button 
        onClick={handleClick} //when click, it triggers the handleclick function
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GroceryList;
