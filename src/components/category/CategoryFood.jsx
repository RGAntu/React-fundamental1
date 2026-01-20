import React from 'react';
import './Category.css'

const CategoryFood = ({food}) => {

    return (
        <div>
            <img className='foodImg' src={food.strMealThumb} alt="" />
        </div>
    );
};

export default CategoryFood;