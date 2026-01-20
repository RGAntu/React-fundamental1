import React, { useEffect, useState } from 'react';
import './Category.css'

const Categories = ({setSelectedCategory}) => {
  const [categories, setCategories] = useState([]);
 useEffect(()=> {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => setCategories(data.categories))
 }, [])
        // console.log(categories)
    return (
        <div>
            {
                categories.map( category => 
                <button 
                onClick={()=> setSelectedCategory(category.strCategory)}
                className='categoryBtn'
                key={category.idCategory}>
                {category.strCategory}
                </button>)
            }
        </div>
    );
};

export default Categories;