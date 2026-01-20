import React, { useState } from 'react';
import Categories from './category/Categories';
import ShowCategoryFood from './category/ShowCategoryFood';



const HomePage = () => {
const [selectedCategory, setSelectedCategory] = useState("")
console.log(selectedCategory)
    return (
        <div>
          <h2>All Meal</h2>
          <Categories setSelectedCategory={setSelectedCategory}></Categories>
          <ShowCategoryFood selectedCategory={selectedCategory}></ShowCategoryFood>
        </div>
    );
};

export default HomePage;