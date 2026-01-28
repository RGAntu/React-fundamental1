import React from "react";
import "./Category.css";

const WishList = ({ wishList, handleRemove }) => {
  return (
    <div className="divBorder " style={{ margin: "20px 0 20px 0" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>WishList</h2>
      <h1>{wishList.length}</h1>

      <div className="wishListContainer">
        {wishList.map((item) => {
          return (
            <div key={item.idMeal} className="wishListItem" style={{position: "relative"}}>
              <img src={item?.strMealThumb} alt={item.strMeal} />
              <p>{item?.strArea}</p>
              <p>{item.strCategory}</p>
              <p>{item.strMeal}</p>
              <button onClick={ () => handleRemove(item.idMeal)} className="removeWishListBtn">X</button> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
