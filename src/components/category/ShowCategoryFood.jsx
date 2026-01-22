import React, { useEffect, useState } from 'react';
import CategoryFood from './CategoryFood';
import './Category.css'

const ShowCategoryFood = ({selectedCategory, setWishList}) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedCategory}`)
        .then(res => res.json())
        .then(data => {
            setFoods(data.meals) 
            setIsLoading(false)
    })
    },[selectedCategory])
   console.log(isLoading)
    return (
        <div className='gridFood'>
            {
                foods?.map((food) => <CategoryFood key={food.idMeal} food={food} setWishList={setWishList}></CategoryFood> )
            }
            {
                isLoading && <p>Food Is Loading....</p>
            }
        </div>
    );
};

export default ShowCategoryFood;