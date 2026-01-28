import React from 'react';
import './Category.css'

const CategoryFood = ({food,handleWishList }) => {
    
    return (
        <div>
            <img className='foodImg' src={food.strMealThumb} alt="" />
            <h2>{food.strArea}</h2>
            <p>{food.strCategory}</p>
            <p>{food.strMeal}</p>
            <button onClick={() => handleWishList(food)} className='wishListBtn'>Wishlist</button>
        </div>
    );
};

export default CategoryFood;